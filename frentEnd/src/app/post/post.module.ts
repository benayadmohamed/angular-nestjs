import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {AddPostComponent} from './add-post/add-post.component';
import {DataTableModule} from 'angular-6-datatable';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainPostComponent } from './main-post/main-post.component';

@NgModule({
  imports: [
    CommonModule, DataTableModule, ReactiveFormsModule, FormsModule, MDBBootstrapModule.forRoot()
  ],
  declarations: [PostsComponent, AddPostComponent, MainPostComponent],
  exports: [PostsComponent, AddPostComponent]
})
export class PostModule {
}
