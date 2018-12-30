import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../data/user';
import * as faker from 'faker';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.load();
    this.userService.users$.subscribe(value => {
      this.users = value;
    });
  }

  delete(user: User) {
    this.userService.delete(user._id).subscribe(value => {
      this.userService.setUsers(this.users.filter(value1 => value1._id !== user._id));
    }, error1 => {
      console.log(error1);
    });
  }
}
