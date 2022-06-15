import { Component, OnInit } from '@angular/core';
import { getTaskList } from '../../data/tasks';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'isi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Array<TaskModel>;
  constructor() {}

  ngOnInit(): void {
    this.tasks = getTaskList();
    console.log(this.tasks);
  }

  onDeleteHandle(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
}
