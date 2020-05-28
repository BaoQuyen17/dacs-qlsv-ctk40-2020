import { Injectable } from "@angular/core";
import {AngularFirestore} from 'angularfire2/firestore';
import { Student } from "../../model/student";
import { Detail } from "../../model/detail";
import { Family } from "../../model/family";
import { Courses } from "../../model/courses";
import { resolve } from "dns";
import { inject } from "@angular/core/src/render3";

@Injectable()
export class StudentService{

    constructor(public firestore: AngularFirestore){

    }

    start(){
        console.log("student start");
    }

    async getStudentFromUID(uID:string){
        let detail:Detail = await  this.getDetail(uID);
        let family:Family = await this.getFamily(uID);
        let course: Courses = await this.getCourse(uID);
    return new Student(detail, family,course);
    }

    async getDetail(uID: string){
       return new Promise<Detail>((resolve, _) =>{
        this.firestore.collection(uID).doc("detail").valueChanges().subscribe(data =>{
            let detail = new Detail(
                data["id"],
                data["email"],
                data["birth"],
                data["identity"],
                data["religion"],
                data["object"],
                data["address"],
                data["nation"],
                data["CYU_date"],
                data["GPCB_date"],
                data["country"], 
                data["district"],
                data["gender"], 
                data["phone"],
                data["lastname"],
                data["firstname"],
                data["id_c_date"],
                data["id_c_province"]);
                resolve(detail);
        }
           );
      });
    }



    
   async getFamily(uID: string) {
        return new Promise<Family>((resole,_) =>{
            this.firestore.collection(uID).doc("family").valueChanges().subscribe(data =>{
                let family =  new Family(
                    data["address"],
                    data["fullname"],
                    data["phone"],
                    data["year"]
                );
                resole(family);
            });
        });
    }
        
   async getCourse(uID: string){
        return  new Promise<Courses>((resolve,_)=>{
           this.firestore.collection(uID).doc("courses").valueChanges().subscribe(data =>{
            let course =new Courses(
                     data["class"],
                     data["course"],
                     data["role"],
                     data["school_year"]
                 );
                 resolve(course);
             })

        })

    }

}