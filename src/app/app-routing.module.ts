import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { UpdateComponent } from './pages/update/update.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path: "home", component: TodoComponent},
  {path: "add", component: AddComponent},
  {path: "delete", component: DeleteComponent}, 
  {path: "update", component: UpdateComponent},
  {path: "contacts", component: ContactsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
