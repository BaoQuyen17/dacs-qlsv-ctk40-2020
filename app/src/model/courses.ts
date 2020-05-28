import { Injectable } from "@angular/core";



@Injectable()
export class Courses{
    classs:string;
    course:string;
    role:string;
    school_year:string;

    constructor(  classs:string,
        course:string,
        role:string,
        school_year:string){
      this.classs = classs;
      this.course = course;
      this.role = role;
      this.school_year = school_year;
        
    }

}