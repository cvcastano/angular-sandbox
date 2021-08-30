import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({    // this is a decorator function
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor= "let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
// ngFor is a directive. whenever we are using a directive that modifies the DOM by adding or removing an element, we have to prefix it with an *. 

export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {     // añadimos el service as a dependancy of this class
        this.courses = service.getCourses();

    }
}