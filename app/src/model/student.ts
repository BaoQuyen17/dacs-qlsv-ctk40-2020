import { Injectable } from "@angular/core";
import { Detail } from "./detail";
import { Family } from "./family";
import { Courses } from "./courses";


@Injectable()
export class Student{
    detail: Detail;
    family: Family[];
    courses: Courses;
    constructor(detail: Detail, family: Family[], courses: Courses){
        this.detail = detail;
        this.family = family;
        this.courses = courses;
    }
}