import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { PopFormComponent } from './pop/pop-form/pop-form.component';
import { PopListComponent } from './pop/pop-list/pop-list.component';

import { MaterialModule } from './modele/material.module';
import { FirebaseModule } from './modele/firebase.module';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    HeaderComponent,
    PopFormComponent,
    PopListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FirebaseModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
