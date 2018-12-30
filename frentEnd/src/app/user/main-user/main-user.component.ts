import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../data/user';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.load();
    this.userService.users$.subscribe(value => {
      this.users = value;
    });
  }

}
