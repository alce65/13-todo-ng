import { TaskModel } from '../models/task';

export function getTaskList(): Array<TaskModel> {
  return [
    {
      id: TaskModel.generateId(),
      title: 'Entender React',
      responsible: 'Yo',
      isCompleted: false,
    },
    {
      id: TaskModel.generateId(),
      title: 'Entender el estado',
      responsible: 'Yo',
      isCompleted: false,
    },
    {
      id: TaskModel.generateId(),
      title: 'Entender la vida',
      responsible: 'Yo',
      isCompleted: false,
    },
  ];
}
