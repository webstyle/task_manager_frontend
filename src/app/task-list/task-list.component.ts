import {Component, OnInit} from '@angular/core';
import {RequestService} from '../services/request.service';
import {Task} from '../classes/task';
import {TaskResult} from '../classes/task-result';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  list: Array<Task> = [];
  result: TaskResult = new TaskResult();
  showResult = false;

  constructor(private request: RequestService) {
  }

  ngOnInit() {
    this.request.loadTasks().then((response: Array<Task>) => {
      console.log(response);
      this.list = response
    });
  }

  run(id: string) {
    this.request.runTask(id).then((response: TaskResult) => {
      this.showResult = true;
      this.result = response;
      document.body.scrollTop = 0;
    });
  }

  closeResult() {
    this.showResult = false;
    this.result = new TaskResult();
  }

}
