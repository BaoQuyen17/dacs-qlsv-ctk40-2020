import { Injectable } from "@angular/core";
import { Student } from "../model/student";


@Injectable()
export class StudentSingleton{
    student: Student;
    uid: string;
    

    setStudent(student: Student){
        this.student = student;
    }

    setuid(uid:string){
        this.uid = uid;
    }
}