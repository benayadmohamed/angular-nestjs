import {User} from '../../user/data/user';

export class Posts {
  _id?: string;
  titre: string;
  data: string;
  date: string;
  img: string;
  user?: User;

  get id(): string {

    return this._id;
  }
}
