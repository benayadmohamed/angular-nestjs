import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MainUserComponent} from './user/main-user/main-user.component';
import {PostsComponent} from './post/posts/posts.component';
import {MainPostComponent} from './post/main-post/main-post.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: MainUserComponent},
  {path: 'users', component: MainUserComponent},
  {path: 'posts', component: MainPostComponent},
  {path: 'posts/:id', component: MainPostComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
