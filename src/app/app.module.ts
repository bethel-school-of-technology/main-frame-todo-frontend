import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './nav/nav.component';


import { FormsModule } from '@angular/forms';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  NavComponent,
  AddComponent,
  UpdateComponent,
  DeleteComponent,
  ContactsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
