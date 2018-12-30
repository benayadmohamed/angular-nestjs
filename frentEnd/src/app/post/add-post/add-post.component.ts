import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user/data/user';
import * as faker from 'faker';
import {Posts} from '../data/posts';
import {PostsService} from '../service/post.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UserService} from '../../user/service/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    data: new FormControl('', [Validators.required, Validators.minLength(100)]),
    date: new FormControl('', [Validators.required]),
    img: new FormControl(''),
    user: new FormControl(''),
  });
  posts: Posts[] = [];
  user: User;
  user_id: User;

  constructor(private postService: PostsService, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.postService.posts$.subscribe(value => {
      this.posts = value;
    });
    this.route.params.subscribe(value2 => {
      if (value2.id) {
        this.userService.findOne(value2.id).subscribe(value => {
          if (value.length > 0) {
            this.user = value[0];
            this.postForm.controls['titre'].setValue(faker.lorem.sentence(3));
            this.postForm.controls['data'].setValue(faker.lorem.paragraphs(2));
            this.postForm.controls['date'].setValue(faker.date.past());
            this.postForm.controls['img'].setValue(faker.image.fashion());
            this.postForm.controls['user'].setValue(this.user);
          }
        });
      }
    });
    /* titre: faker.lorem.sentence(),
       data: faker.lorem.paragraphs(3),
       postedAt: faker.date.past(),*/
  }


  onSubmit() {
    this.postService.add(this.postForm.value).subscribe(value => {
      console.log('HJJJJJJJJJJJJJJJJJJJJJJJJJ', value);
      this.posts.unshift(value);
      this.postService.setPosts(this.posts);
      this.postForm.controls['titre'].setValue(faker.lorem.sentence(3));
      this.postForm.controls['data'].setValue(faker.lorem.paragraphs(2));
      this.postForm.controls['date'].setValue(faker.date.past());
      this.postForm.controls['img'].setValue(faker.image.fashion());
      this.postForm.controls['user'].setValue(this.user);
    }, error1 => {
      console.log(error1);
    });
  }

  reset() {
    this.user = null;
  }

}
