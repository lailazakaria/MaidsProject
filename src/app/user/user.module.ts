import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentComponent } from './components/user_list/user-list-component/user-list-component.component';
import { UserDetailComponentComponent } from './components/user_detail/user-detail-component/user-detail-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserListComponentComponent, UserDetailComponentComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UserDetailComponentComponent, UserListComponentComponent],
})
export class UserModule {}
