import type {
  AddAccount,
  AddAccountModel,
} from "../../../domain/usecases/add-account";
import type { AccountModel } from "../../../domain/models/account";
import type { Encrypter } from "../../protocols/encrypter";

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;
  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(accountData.password);
    return await new Promise((resolve) => {
      resolve(accountData);
    });
  }
}
