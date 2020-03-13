import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { PopListComponent } from './pop/pop-list/pop-list.component';
import { PopFormComponent } from './pop/pop-form/pop-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PopListComponent },
  { path: 'formUser', component: UserFormComponent },
  { path: 'listUser', component: UserListComponent },
  { path: 'formPop', component: PopFormComponent },
  { path: 'listPop', component: PopListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
