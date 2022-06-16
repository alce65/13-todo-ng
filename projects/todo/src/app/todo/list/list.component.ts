import { Component, OnInit } from '@angular/core';
import { getTaskList } from '../../data/tasks';
import { iTaskModel, TaskModel } from '../../models/task';

@Component({
  selector: 'isi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Array<TaskModel>;
  title!: string;
  constructor() {}

  ngOnInit(): void {
    this.title = 'Lista de tareas<';
    this.tasks = getTaskList();
    console.log(this.tasks);
  }

  onDeleteHandle(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  onChangeHandle(task: TaskModel) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
    console.log(this.tasks);
  }

  onAddHandle(task: TaskModel) {
    this.tasks.push(task);
  }
}
