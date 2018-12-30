import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/postSchema';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostController],
  providers: [PostsService],
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],

})
export class PostModule {
}
