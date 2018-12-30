export class User {
  private _id?: number;
  name: string;
  email: string;

  get id(): number {
    return this._id;
  }
}
