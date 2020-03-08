//https://codewithmosh.com/courses/222856/lectures/3468169
import { CoursesService } from '../../services/courses.service'
import { Component } from '@angular/core';

@Component({
  selector: "courses",
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li> 
      </ul>
      <table>
      <tr>
      <!-- Attribute Binding !-->
      <td [attr.colspan]="colSpan">2</td>
      </tr>      
      </table>
  `
})


export class DirectiveComponent{
  title = "List of titles";
  courses;
  colSpan = 2;

  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }
}