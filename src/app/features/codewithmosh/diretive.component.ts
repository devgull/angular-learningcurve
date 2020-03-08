import { Component } from '@angular/core';


@Component({
  selector: "courses",
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses"></li> 
      </ul>
  `
})


export class DirectiveComponent{
  title = "List of titles";
  courses = ["Course 1", "Course 2", "Course 3"];
}