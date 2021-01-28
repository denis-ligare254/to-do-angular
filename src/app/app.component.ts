import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My to-do list';
  todo =[
    {
    taskOne:'marketing',
    taskTwo:'cook',
    priority:1,
  },
      {
    taskOne:'fetch water',
    taskTwo:'read',
    priority:2,
  },
      {
    taskOne:'go to school',
    taskTwo:'work hard',
    priority:3,
  },
      {
    taskOne:'cook for mummy',
    taskTwo:'shower',
    priority:4,
  },
];
}
