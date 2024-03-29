import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './user/components/user_list/user-list-component/user-list-component.component';
import { UserDetailComponentComponent } from './user/components/user_detail/user-detail-component/user-detail-component.component';

const routes: Routes = [
  { path: '', component: UserListComponentComponent },
  { path: 'user/:id', component: UserDetailComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
