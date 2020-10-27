import {Injectable} from '@angular/core';
import { WebrequestService} from './webrequest.service';




@Injectable({
    providedIn:'root'
})
export class TasksDataService {
    getTasks() {
        return this.webRequestService.getTasks('tasks');
    }

    constructor(private webRequestService: WebrequestService){}

    createTask(title: string){
       return this.webRequestService.addTasks('user', { title });
    }
    getLists(){
        return this.webRequestService.get('user');
    }
}