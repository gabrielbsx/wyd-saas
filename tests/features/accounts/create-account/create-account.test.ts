import { AccountDataSource } from "@/accounts/data-source/account/account.datasource";
import { AccountModel } from "@/accounts/data-source/account/account.model";
import { BcryptCryptography } from "@/accounts/externals/bcrypt";
import { CreateAccountController } from "@/accounts/features/create-account/create-account.controller";
import { CreateAccountRequest } from "@/accounts/features/create-account/create-account.dto";
import { CreateAccountUsecase } from "@/accounts/features/create-account/create-account.usecase";
import { CreateAccountValidation } from "@/accounts/features/create-account/create-account.validation";
import { DataSourceConnection } from "@/shared/data-source/connection";
import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

import { beforeAll, describe, expect, it } from "vitest";

describe("Create Account Feature", async () => {
  await DataSourceConnection.connect();

  beforeAll(async () => {
    await AccountModel.deleteMany({});
  });

  const makeSut = () => {
    const accountDataSource = new AccountDataSource();
    const validation = new CreateAccountValidation();
    const cryptography = new BcryptCryptography();
    const usecase = new CreateAccountUsecase(accountDataSource, cryptography);
    const controller = new CreateAccountController(usecase, validation);

    return { sut: controller };
  };

  const makeDto = (): CreateAccountRequest => ({
    username: "valid",
    password: "valid",
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
    await expect(result).rejects.toThrow(BadRequestException);
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
    await expect(result).rejects.toThrow(BadRequestException);
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
