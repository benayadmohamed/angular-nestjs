import * as mongoose from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { Error } from 'tslint/lib/error';

export const PostSchema = new mongoose.Schema({
  titre: String,
  data: String,
  date: String,
  img: String,
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
});
/*
PostSchema.pre('save', (next) => {
  this.validate(async err => {
    if (err) {
      await Promise.resolve();
      // You can also throw an error in an `async` function
      next(new Error('Conversation exists'));
      // next(new HttpException('n\'est pas Ajou', HttpStatus.INTERNAL_SERVER_ERROR));
    }
  });
});
*/
