import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Task Tracker';

  constructor() { }
  // lifecycle method - this is what you are going to want to use
  // most of the time when you're initializing some code
  // so if you want it to run when the component loads - you 
  // would put it in here
  // So if you wanted to make an HTTP request or something like that
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("toggle")
  }
}
