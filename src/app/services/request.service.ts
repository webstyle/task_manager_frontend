import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from 'environments/environment';
import 'rxjs/add/operator/toPromise';

import {Task} from '../classes/task';
import {TaskResult} from '../classes/task-result';

@Injectable()
export class RequestService {
  private baseUrl: string = environment.url;

  constructor(private http: Http) {
  }

  public loadTasks(): Promise<Task[]> {
    return this.http.get(environment.url + '/task/all')
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);
  }

  public runTask(id: string): Promise<TaskResult> {
    return this.http.get(`${environment.url}/task/${id}`)
      .toPromise()
      .then(response => response.json() as TaskResult)
      .catch(this.handleError)
  }


  public save(data: Task): Promise<TaskResult> {
    return this.http.post(`${environment.url}/task/`, data)
      .toPromise()
      .then(response => response.json() as TaskResult)
      .catch(this.handleError)
  }

  private handleError(error: Response | any): Promise<any> {
    return Promise.reject('error');
  }
}
