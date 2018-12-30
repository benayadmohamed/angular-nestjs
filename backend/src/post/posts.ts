import { User } from '../user/user';

export class Posts {
  private _id?: number;
  titre: string;
  data: string;
  date: string;
  img: string;
  user?: User | string;

  get id(): number {
    return this._id;
  }
}
