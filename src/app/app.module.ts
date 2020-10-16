import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { NavComponent } from './nav/nav.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    NavComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
