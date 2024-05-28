import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add/add.component';
import { EditUserComponent } from './edit/edit.component';
import { UsersListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component:AddUserComponent },
  { path: 'list', component:UsersListComponent},

  { path: ':id/edit', component:EditUserComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
