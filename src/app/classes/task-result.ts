import {Task} from './task';
export class TaskResult {
  task: Task;
  stdout: string;
  stderr: string;

  constructor() {
    this.task = new Task();
    this.stderr = '';
    this.stdout = '';
  }
}
