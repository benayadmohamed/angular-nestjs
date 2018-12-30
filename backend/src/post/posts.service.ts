import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Posts } from './posts';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { first } from 'rxjs/operators';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) {
  }

  create(post: Posts): Observable<Posts> {
    return new Observable<Posts>(subscriber => {
      setTimeout(e => {
        const createdPost = new this.postModel(post);
        createdPost.validate(err => {
          if (err) {
            subscriber.error(new HttpException('n\'est pas ajou', HttpStatus.INTERNAL_SERVER_ERROR));
            subscriber.complete();
          } else {
            createdPost.save();
            createdPost.user = post.user;
            subscriber.next(createdPost);
            subscriber.complete();
          }
        });
      }, 0);
    });
    /*return new Observable<Posts>(subscriber => {
      setTimeout(e => {
        const createdPost = new this.postModel(post);
        createdPost.save((err) => {
          if (err) {
            subscriber.error(err);
          } else {
            subscriber.next(createdPost);
            subscriber.complete();
          }
        });
        return of(createdPost);
      }, 0);
    });*/
  }

  findAll(): Observable<Posts[]> {
    return of(this.postModel.find());
  }

  findByUserId(id): Observable<Posts[]> {
    return of(this.postModel.find({ user: id })).pipe(first());
  }

  update(post: Posts): Observable<Posts> {
    return new Observable<Posts>(subscriber => {
      setTimeout(e => {
        this.postModel.updateOne({ _id: post.id }, post, (error, result) => {
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
        this.postModel.deleteOne({ _id: id }, (error, result) => {
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
    return of(this.postModel.find());
  }

  findOne(id): Observable<Posts> {
    return new Observable(subscriber => {
      setTimeout(args => {
        const post = this.postModel.find({ _id: id });
        if (post) {
          subscriber.next(post);
          subscriber.complete();
        } else {
          subscriber.error(new HttpException('n\'est pas supp', HttpStatus.INTERNAL_SERVER_ERROR));
        }
      }, 0);
    });
  }
}
