import { Injectable } from "@angular/core";



@Injectable()
export class Courses {
  classs: string;
  course: string;
  role: string;
  school_year: string;

  constructor(classs: string,
    course: string,
    role: string,
    school_year: string) {
    this.classs = classs;
    this.course = course;
    this.role = role;
    this.school_year = school_year;

  }
  toJson(){
  return {
    'classs': this.classs,
    'course': this.course,
    'role': this.role,
    'school_year': this.school_year
  }
}
}
