import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Task} from '../classes/task';
import {RequestService} from '../services/request.service';
import {TaskResult} from '../classes/task-result';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>();
  @Output() onNewTask = new EventEmitter<TaskResult>();
  task: Task = new Task();
  constructor(private request: RequestService) { }

  ngOnInit() {
  }

  save() {
    this.request.save(this.task)
      .then((response: TaskResult) => {
        response.task.saveAndRun = this.task.saveAndRun;
        this.sendOutputTask(response)
      });
  }

  sendOutputTask(data: TaskResult) {
    this.onNewTask.emit(data);
    this.close(true);
  }

  close(close: boolean) {
    this.onClose.emit(close);
  }

}
