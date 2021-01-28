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
    Done:1,
  },
      {
    task:'fetch water',
    label:'read',
    Done:2,
  },
      {
    task:'go to school',
    label:'work hard',
     Done:3,
  },
      {
    task:'cook for mummy',
    label:'shower',
    Done:4,
  },
];
}
