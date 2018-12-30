import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  create(user: User): Observable<User> {
    const createdCat = new this.userModel(user);
    createdCat.save();
    return of(createdCat);
  }

  findAll(): Observable<User[]> {
    return of(this.userModel.find());
  }

  update(user: User): Observable<User> {
    return new Observable<User>(subscriber => {
      setTimeout(e => {
        this.userModel.updateOne({ _id: user.id }, user, (error, result) => {
          if (!error && result.nModified > 0) {
            subscriber.next(result);
            subscriber.complete();
          } else {
            // throw new HttpException('n\'est pas supp', HttpStatus.INTERNAL_SERVER_ERROR);
            subscriber.error(new HttpException('n\'est pas supp', HttpStatus.INTERNAL_SERVER_ERROR));
          }
        });
      }, 0);
    });
  }

  remove(id): Observable<boolean> {
    return new Observable(subscriber => {
      setTimeout(args => {
        this.userModel.deleteOne({ _id: id }, (error, result) => {
          if (!error && result.n > 0) {
            subscriber.next(result);
            subscriber.complete();
          } else {
            // throw new HttpException('n\'est pas supp', HttpStatus.INTERNAL_SERVER_ERROR);
            subscriber.error(new HttpException('n\'est pas supp', HttpStatus.INTERNAL_SERVER_ERROR));
          }
        });
      }, 0);
    });
    return of(this.userModel.find());
  }

  findOne(id): Observable<User> {
    return new Observable(subscriber => {
      setTimeout(args => {
        const user = this.userModel.find({ _id: id });
        if (user) {
          subscriber.next(user);
          subscriber.complete();
        } else {
          subscriber.error(new HttpException('n\'est pas supp', HttpStatus.INTERNAL_SERVER_ERROR));
        }
      }, 0);
    });
  }
}
