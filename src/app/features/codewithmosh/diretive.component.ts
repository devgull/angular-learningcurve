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
      <table [border]="border">
      <tr>
      <!-- Attribute Binding !-->
      <td [attr.colspan]="colSpan">{{border}}</td>
      </tr>  
      <tr>
        <!-- Attribute Binding !-->
        <td (click)="addBorder()">1</td>
        <td (click)="removeBorder()">2</td>
      </tr>             
      </table>
      <input type="number" [(ngModel)]="bindingString" />
  `
})


export class DirectiveComponent{
  title = "List of titles";
  courses;
  colSpan = 2;
  border = 1;

  get bindingString(): string{
    return this.border.toString();
  }
  set bindingString(_value: string){
    this.border = parseInt(_value);
  }

  addBorder(){
    this.border++;
  }  
  removeBorder(){
    this.border--;
  }

  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }
}