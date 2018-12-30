import {Component, OnInit} from '@angular/core';
import {Posts} from '../data/posts';
import {PostsService} from '../service/post.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../user/data/user';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postService: PostsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.postService.load();
    this.postService.posts$.subscribe(value => {
      console.log(value);
      this.route.params.subscribe(value2 => {
        if (value2.id) {
          this.posts = value.filter(value1 => value1.user === value2.id);
        } else {
          this.posts = value;
        }
      });
    });
  }

  delete(posts: Posts) {
    this.postService.delete(posts._id).subscribe(value => {
      this.postService.setPosts(this.posts.filter(value1 => value1._id !== posts._id));
    }, error1 => {
      console.log(error1);
    });
  }
}
