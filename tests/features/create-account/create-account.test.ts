import { CreateAccountController } from "@/features/create-account/implementations/create-account.controller";
import { CreateAccountDto } from "@/features/create-account/implementations/create-account.dto";
import { CreateAccountUsecaseImpl } from "@/features/create-account/implementations/create-account.usecase";
import { CreateAccountValidation } from "@/features/create-account/implementations/create-account.validation";
import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

import { describe, expect, it } from "vitest";

describe("Create Account Feature", () => {
  const makeSut = () => {
    const validation = new CreateAccountValidation();
    const usecase = new CreateAccountUsecaseImpl();
    const controller = new CreateAccountController(usecase, validation);

    return { sut: controller };
  };

  const makeDto = (): CreateAccountDto => ({
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
    expect(result).rejects.toThrow(BadRequestException);
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
    expect(result).rejects.toThrow(BadRequestException);
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
    expect(result).resolves.toBeUndefined;
  });
});
