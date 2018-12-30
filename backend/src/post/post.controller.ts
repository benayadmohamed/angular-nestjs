import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { PostsService } from './posts.service';
import { Posts } from './posts';

@Controller('post')
export class PostController {
  constructor(private postsService: PostsService) {
  }

  @Get()
  getAll(): Observable<Posts[]> {
    return this.postsService.findAll();
  }

  @Get('user/:id')
  getByUserId(@Param('id') id): Observable<Posts[]> {
    return this.postsService.findByUserId(id);
  }

  @Get(':id')
  findOne(@Param('id') id): Observable<Posts> {
    return this.postsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id): Observable<any> {
    return this.postsService.remove(id);
  }

  @Put()
  update(@Body() posts: Posts) {
    return this.postsService.update(posts);
  }

  @Post()
  add(@Body() posts: Posts): Observable<Posts> {
    // console.log(posts);
    return this.postsService.create(posts);
  }
}
