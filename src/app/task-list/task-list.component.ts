import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {RequestService} from '../services/request.service';
import {Task} from '../classes/task';
import {TaskResult} from '../classes/task-result';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  list: Array<Task> = [];
  @Input() result: TaskResult = new TaskResult();
  @Input() showResult = false;

  constructor(private request: RequestService) {
  }

  ngOnChanges() {
    this.list.push(this.result.task);
  }

  ngOnInit() {
    this.loadAll();
  }

  run(id: string) {
    this.request.runTask(id).then((response: TaskResult) => {
      this.showResult = true;
      this.result = response;
      document.body.scrollTop = 0;
    });
  }

  remove(id: string) {
    this.request.removeTask(id).then(response => this.loadAll());
  }

  closeResult() {
    this.showResult = false;
    this.result = new TaskResult();
  }

  loadAll() {
    this.request.loadTasks().then((response: Array<Task>) => this.list = response);
  }

  @Input()
  task(data: Task) {
    console.log(data);
    this.list.push(data);
  }

}
