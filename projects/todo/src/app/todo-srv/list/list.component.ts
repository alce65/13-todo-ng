import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Array<TaskModel>;
  title!: string;
  constructor(private taskState: TaskStateService) {}

  ngOnInit(): void {
    this.title = 'Lista de tareas by Service';
    this.taskState.getTasks().subscribe((data) => (this.tasks = data));
  }
}
