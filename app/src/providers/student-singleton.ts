import { Injectable } from "@angular/core";
import { Student } from "../model/student";


@Injectable()
export class StudentSingleton{
    student: Student;
    

    setStudent(student: Student){
        this.student = student;
    }
}