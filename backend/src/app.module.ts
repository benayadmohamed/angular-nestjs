import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { PostsService } from './post/posts.service';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost/test'),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule {
}
