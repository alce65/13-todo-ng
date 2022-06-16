import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { iTaskModel, TaskModel } from '../../models/task';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  task!: iTaskModel;
  constructor(private taskState: TaskStateService) {}

  ngOnInit(): void {
    this.task = { title: '', responsible: '' };
  }

  handleClick() {
    if (!this.task.title) return;
    this.task = new TaskModel(this.task.title, this.task.responsible);
    this.taskState.addTask(this.task as TaskModel);
    this.task = { title: '', responsible: '' };
  }
}
