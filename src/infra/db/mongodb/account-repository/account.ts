import type { AccountModel } from "../../../../domain/models/account";
import type {
  AddAccount,
  AddAccountModel,
} from "../../../../domain/usecases/add-account";
import { MongoHelper } from "../helpers/mongo-helper";

export class AccountMongoRepository implements AddAccount {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection("accounts");
    const result = await accountCollection.insertOne(accountData);
    const accountById = await accountCollection.findOne({
      _id: result.insertedId,
    });
    if (!accountById) {
      throw new Error("Account not found after insertion");
    }
    return MongoHelper.mongoMapper(accountById);
  }
}
