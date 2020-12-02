import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksDataService } from '../tasks-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  users: any[];
  tasks: any[];

  constructor(private tasksDataService: TasksDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.tasksDataService.getTasks(params.userId).subscribe((tasks: any[]) => {
          this.tasks = tasks;

        })
      }
    )

    this.tasksDataService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    })
  }
}