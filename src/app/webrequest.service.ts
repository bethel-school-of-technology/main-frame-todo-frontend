import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {
  get(arg0: string) {
      throw new Error('Method not implemented.');
  }

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

  getTasks(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  addTasks(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  patchTasks(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  deleteTasks(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}