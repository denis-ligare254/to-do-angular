import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My todos';
  todos =[
    {
    task:'marketing',
    label:'cook',
    priority:1,
  },
      {
    task:'fetch water',
    label:'read',
    priority:2,
  },
      {
    task:'go to school',
    label:'work hard',
    priority:3,
  },
      {
    task:'cook for mummy',
    label:'shower',
    priority:4,
  },
];
}
