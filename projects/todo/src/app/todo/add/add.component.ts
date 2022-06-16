import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { iTaskModel, TaskModel } from '../../models/task';

@Component({
  selector: 'isi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  task!: iTaskModel;
  @Output() onAdd: EventEmitter<TaskModel>;

  constructor() {
    this.onAdd = new EventEmitter();
  }

  ngOnInit(): void {
    this.task = { title: '', responsible: '' };
  }

  handleClick() {
    if (!this.task.title) return;
    this.task = new TaskModel(this.task.title, this.task.responsible);
    this.onAdd.next(this.task as TaskModel);
    this.task = { title: '', responsible: '' };
  }
}
