import { Component } from '@angular/core';
import {TaskResult} from './classes/task-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager v0.0.1';
  showAdd = false;
  taskResult: TaskResult = new TaskResult;
  showResult = false;

  newTask(data: TaskResult) {
    this.taskResult = data;
    this.showResult = data.task.saveAndRun;
  }
}
