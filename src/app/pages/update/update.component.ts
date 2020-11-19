import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksDataService } from 'src/app/tasks-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  constructor(private taskDataService: TasksDataService, private router: Router, private route: ActivatedRoute ) {}
  userId: string;
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) =>{
        this.userId = params['userId'];
      }
    )
  }
  createTask(title: string){
    this.taskDataService.createTask(title, this.userId).subscribe((newTask: Task)=>{
  
    });
}
}
