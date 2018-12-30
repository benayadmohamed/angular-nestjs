export class User {
  _id?: string;
  name: string;
  email: string;

  get id(): string {
    return this._id;
  }
}
