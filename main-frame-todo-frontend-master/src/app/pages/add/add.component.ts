import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksDataService } from 'src/app/tasks-data.service';
import { User } from 'src/app/models/user.model';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private taskDataService: TasksDataService, private router: Router, private route: ActivatedRoute) { }

  userId: string;

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params)=>{
        this.userId = params['userId'];
      }
    )
    
  }
createTask(title: string){
  this.taskDataService.createTask(title, this.userId).subscribe((newTask: Task)=>{
    this.router.navigate(['../'], {relativeTo: this.route});
  })
}

createUser(title: string) {
  this.router.navigate(['users'])
  this.taskDataService.createUser(title).subscribe((user: User)=>{
  
  });
}

}
