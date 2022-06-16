import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isi-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;

  constructor(private taskState: TaskStateService) {}

  ngOnInit(): void {}

  deleteHandle(): void {
    console.log('delete', this.task.id);
    this.taskState.deleteTask(this.task.id);
  }

  changeHandle() {
    console.log('Update', this.task);
    this.taskState.updateTask(this.task);
  }
}
