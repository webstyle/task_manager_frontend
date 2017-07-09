export class Task {
  _id: string;
  title: string;
  create?: string;
  description?: string;
  start?: string;
  end?: string;
  days?: Array<string>;
  filePath: string;
  command: string;
  stderr: string;
  stdout: string;
  exitCode: number;
  status: string;
  constructor() {
    this._id = '';
    this.title = '';
    this.create = '';
    this.description = '';
    this.start = '';
    this.end = '';
    this.days = [];
    this.filePath = '';
    this.command = '';
    this.stderr = '';
    this.stdout = '';
    this.exitCode = 0;
    this.status = '';
  }


}
