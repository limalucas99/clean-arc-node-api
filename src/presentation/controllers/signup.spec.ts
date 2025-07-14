import { SignUpController } from "./signup";

describe("Signup Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const httpResponse = sut.handle(httpRequest);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(httpResponse.statusCode).toBe(400);
  });
});
