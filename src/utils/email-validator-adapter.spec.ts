import { EmailValidatorAdapter } from "./email-validator-adapter";
import validator from "validator";

jest.mock("validator", () => ({
  isEmail(): boolean {
    return true;
  },
}));

const makeSut = (): EmailValidatorAdapter => new EmailValidatorAdapter();

describe("EmailValidatorAdapter", () => {
  test("Should return false if validator returns false", () => {
    const sut = makeSut();
    jest.spyOn(validator, "isEmail").mockReturnValueOnce(false);
    const isValid = sut.isValid("lucasemailcom");
    expect(isValid).toBe(false);
  });

  test("Should return true if validator returns true", () => {
    const sut = makeSut();
    const isValid = sut.isValid("valid_email@email.com");
    expect(isValid).toBe(true);
  });

  test("Should call validator with correct email", () => {
    const sut = makeSut();
    const isEmailSpy = jest.spyOn(validator, "isEmail");
    sut.isValid("any_email@email.com");
    expect(isEmailSpy).toHaveBeenCalledWith("any_email@email.com");
  });
});
