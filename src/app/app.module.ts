import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { UserService } from './services/users.service';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroComponentComponent,
    TableComponent,
    TableRowComponent,
    AddNewUserComponent,
    NotFoundComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    // RouterModule.forRoot([
    //   {path: '', component: HomePageComponent},
    //   {path: 'addNewUser', component: AddNewUserComponent},
    //   {path: '**', component: NotFoundComponent}
    // ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
