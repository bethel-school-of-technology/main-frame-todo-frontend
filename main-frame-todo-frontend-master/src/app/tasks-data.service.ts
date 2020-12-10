import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';




@Injectable({
    providedIn: 'root'
})
export class TasksDataService {

    constructor(private webRequestService: WebrequestService) { }
    getUsers() {
        return this.webRequestService.get('user');
    }

    createUser(title: string) {
        return this.webRequestService.post('user', { title });
    }
    
    deleteUser(id: string) {
        return this.webRequestService.delete(`user/${id}`);
    }

    updateUser(id: string, title: string) {
        return this.webRequestService.patch(`user/${id}`, { title });
    }

    getTasks(userId: string) {
        return this.webRequestService.get(`user/${userId}/task`);
    }

    createTask(title: string, userId: string) {
        return this.webRequestService.post(`user/${userId}/task`, { title });
    }

    deleteTask(userId: string, taskId: string) {
        return this.webRequestService.delete(`user/${userId}/task/${taskId}`);
    }

    updateTask(userId: string, taskId: string, title: string) {
        return this.webRequestService.patch(`user/${userId}/task/${taskId}`, { title })
    }

}