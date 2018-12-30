import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {User} from '../data/user';
import * as faker from 'faker';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  users: User[] = [];
  singleModel = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.users$.subscribe(value => {
      this.users = value;
    });
    this.userForm.controls['name'].setValue(faker.name.findName());
    this.userForm.controls['email'].setValue(faker.internet.email());
  }

  onSubmit() {
    this.userService.add(this.userForm.value).subscribe(value => {
      this.users.unshift(value);
      this.userService.setUsers(this.users);
      this.userForm.controls['name'].setValue(faker.name.findName());
      this.userForm.controls['email'].setValue(faker.internet.email());
    }, error1 => {
    });
  }

}
