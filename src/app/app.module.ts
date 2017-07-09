import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import {RequestService} from './services/request.service';
import { TaskCreateComponent } from './task-create/task-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
