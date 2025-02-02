import "reflect-metadata";

import { AccountCommandDatasource } from "@/accounts/data-source/account/account-command.datasource";
import { AccountQueryDatasource } from "@/accounts/data-source/account/account-query.datasource";
import { AccountModel } from "@/accounts/data-source/account/account.model";
import { BcryptCryptography } from "@/accounts/externals/bcrypt";
import { CreateAccountController } from "@/accounts/features/create-account/create-account.controller";
import { CreateAccountRequest } from "@/accounts/features/create-account/create-account.dto";
import { CreateAccountUsecase } from "@/accounts/features/create-account/create-account.usecase";
import { CreateAccountValidation } from "@/accounts/features/create-account/create-account.validation";
import { DataSourceConnection } from "@/shared/data-source/connection";
import { EventBusImpl } from "@/shared/event/event-bus";

import { beforeAll, describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { env } from "@/shared/externals/env";

describe("Create Account Feature", async () => {
  await DataSourceConnection.connect(env.MONGO_URL_TEST);

  beforeAll(async () => {
    await AccountModel.deleteMany({});
  });

  const makeSut = () => {
    const validation = new CreateAccountValidation();
    const cryptography = new BcryptCryptography();
    const eventBus = new EventBusImpl();
    const accountCommandDatasource = new AccountCommandDatasource();
    const accountQueryDatasource = new AccountQueryDatasource();
    const usecase = new CreateAccountUsecase(
      accountCommandDatasource,
      accountQueryDatasource,
      cryptography,
      eventBus
    );
    const controller = new CreateAccountController(usecase, validation);

    return { sut: controller };
  };

  const makeDto = (): CreateAccountRequest => ({
    username: "valid",
    password: "valid",
    email: "valid@valid.com",
    passwordConfirmation: "valid",
  });

  it("should not create an account with invalid payload", async () => {
    // Given
    const { sut } = makeSut();
    const dto = { ...makeDto(), username: undefined };

    // When
    const result = sut.handle({
      body: dto,
    });

    // Then
    await expect(result).rejects.toThrow(ZodError);
  });

  it("should not create an account with invalid password confirmation", async () => {
    // Given
    const { sut } = makeSut();
    const dto = { ...makeDto(), passwordConfirmation: "invalid" };

    // When
    const result = sut.handle({
      body: dto,
    });

    // Then
    await expect(result).rejects.toThrow(ZodError);
  });

  it("should create an account with valid payload", async () => {
    // Given
    const { sut } = makeSut();
    const dto = makeDto();

    // When
    const result = sut.handle({
      body: dto,
    });

    // Then
    await expect(result).resolves.toBeUndefined;
  });
});
