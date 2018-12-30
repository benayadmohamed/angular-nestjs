import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get()
  getAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Observable<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id): Observable<any> {
    return this.userService.remove(id);
  }

  @Put()
  update(@Body() user: User) {
    return this.userService.update(user);
  }

  @Post()
  add(@Body() user: User): Observable<User> {
    // console.log(user);
    return this.userService.create(user);
  }

  /*
        @Delete()
        delete(user: User): boolean {
          return true;
        }

        @Put()
        update(user: User): User {
          return new User();
        }*/
}
