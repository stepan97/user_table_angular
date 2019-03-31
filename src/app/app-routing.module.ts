import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'users', component: TableComponent},
  {path: 'add-new-user', component: AddNewUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
