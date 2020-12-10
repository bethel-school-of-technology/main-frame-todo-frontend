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
    deleteUser(id: string){
        return this.webRequestService.delete(`user/${id}`);
    }

    updateUser(id:string, title: string){
        return this.webRequestService.patch(`user/${id}`,{title});
    }

    getUsers() {
        return this.webRequestService.get('user');
    }

    getTasks(userId: string) {
        return this.webRequestService.get(`user/${userId}/task`);
    }
    createTask(title: string, userId: string){
        return this.webRequestService.post(`user/${userId}/task`,{title})
            }
}