import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksDataService } from 'src/app/tasks-data.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private taskDataService: TasksDataService, private router: Router, private route: ActivatedRoute) { }

  

  ngOnInit(){
    
  }
createUser(title: string) {
  this.router.navigate(['home'])
  this.taskDataService.createUser(title).subscribe((user: User)=>{
  
  });
}

}
