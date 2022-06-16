import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3542/tasks/';
  }

  getTasks(): Observable<Array<TaskModel>> {
    return this.http.get(this.apiUrl) as Observable<Array<TaskModel>>;
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post(this.apiUrl, task) as Observable<TaskModel>;
  }

  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.http.patch(
      this.apiUrl + task.id,
      task
    ) as Observable<TaskModel>;
  }
  deleteTask(id: TaskModel['id']): Observable<TaskModel> {
    return this.http.delete(this.apiUrl + id) as Observable<TaskModel>;
  }
}
