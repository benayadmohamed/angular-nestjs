import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {MainUserComponent} from './main-user/main-user.component';
import {DataTableModule} from 'angular-6-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, DataTableModule, ReactiveFormsModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule
  ],
  declarations: [UsersComponent, AddUserComponent, MainUserComponent],
  exports: [UsersComponent, AddUserComponent, MainUserComponent]
})
export class UserModule {
}
