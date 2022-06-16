import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from '../models/task';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TaskStateService {
  private $tasks: BehaviorSubject<Array<TaskModel>>;

  constructor(private apiService: ApiService) {
    this.$tasks = new BehaviorSubject([] as Array<TaskModel>);
  }

  getTasks() {
    this.apiService.getTasks().subscribe((data) => {
      this.$tasks.next(data);
    });
    return this.$tasks.asObservable();
  }

  deleteTask(id: number) {
    this.apiService
      .deleteTask(id)
      .subscribe((data) =>
        this.$tasks.next(this.$tasks.value.filter((item) => item.id !== id))
      );
  }

  updateTask(task: TaskModel) {
    this.apiService.updateTask(task).subscribe((data) => {
      console.log('Updated subs', data, task);
      this.$tasks.next(
        this.$tasks.value.map((item) => (item.id === task.id ? task : item))
      );
    });
  }

  addTask(task: TaskModel) {
    this.apiService.addTask(task).subscribe((data) => {
      this.$tasks.next([...this.$tasks.value, data]);
    });
  }
}
