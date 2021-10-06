import { Component, OnInit } from '@angular/core';
// Lets also bring our interface in bc w/e we define a task
// we want to use it
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // TASKS I want to assign as a property of our component
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
