import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksDataService } from '../tasks-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private tasksDataService: TasksDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.getTasks();
      }
    )
    } 
  getTasks(){
    this.tasksDataService.getTasks().subscribe(()=>{
    });
  }
  createNewList() {
    this.tasksDataService.createTask('testing').subscribe(() => {

    })
  }
}
