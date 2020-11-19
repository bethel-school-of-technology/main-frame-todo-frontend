import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';




@Injectable({
    providedIn: 'root'
})
export class TasksDataService {

    constructor(private webRequestService: WebrequestService) { }

    createUser(title: string) {
        return this.webRequestService.post('user', { title });
    }
    

    getUsers() {
        return this.webRequestService.get('user');
    }

    getTasks(userId: string) {
        return this.webRequestService.get(`user/$(userId)/tasks`);
    }
    createTask(title: string, userId: string){
        return this.webRequestService.post(`user/$(userId)/tasks`,{title})
            }
}