import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Student } from "../../model/student";
import { Detail } from "../../model/detail";
import { Family } from "../../model/family";
import { Courses } from "../../model/courses";
import { HistoryDetail } from "../../model/history";
import { resolve } from "dns";
import { StudentSingleton } from "../student-singleton";


@Injectable()
export class StudentService {

    studentRef = "students"
    adminRef = "admin"
    constructor(public firestore: AngularFirestore, public dataStore: StudentSingleton) {

    }

    start() {
        console.log("student start");
    }

    async getStudentFromUID() {
        let uID = this.dataStore.uid;
        let detail: Detail = await this.getDetail(uID);
        let family: Family[]
        let course: Courses
        if (detail.role == "SV") {
            family = await this.getFamily(uID);
            course = await this.getCourse(uID);
        }

        return new Student(detail, family, course);
    }

    async getDetail(uID: string) {
        return new Promise<Detail>((resolve, _) => {
            this.firestore.collection(this.studentRef).doc(uID).collection("detail").doc("detail").valueChanges().subscribe(data => {
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
                    data["id_c_province"],
                    data["role"]);
                resolve(detail);
            }
            );
        });
    }

    async getFather(uID: string) {
        return new Promise<any>((resole, _) => {
            this.firestore.collection(this.studentRef).doc(uID).collection("family").doc("father").valueChanges().subscribe(data => {
                let father = new Family(
                    data["address"],
                    data["fullname"],
                    data["phone"],
                    data["year"],
                    data["role"],            )
                resole(father)
            });
        });
    }
    
    async getMother(uID: string) {
        return new Promise<any>((resole, _) => {
            this.firestore.collection(this.studentRef).doc(uID).collection("family").doc("mother").valueChanges().subscribe(data => {
                let mother = new Family(
                    data["address"],
                    data["fullname"],
                    data["phone"],
                    data["year"],
                    data["role"],
                )
                resole(mother)
            });
        });
    }
    
    async getContact(uID: string) {
        return new Promise<any>((resole, _) => {
            this.firestore.collection(this.studentRef).doc(uID).collection("family").doc("contact").valueChanges().subscribe(data => {
                let contact = new Family(
                    data["address"],
                    data["fullname"],
                    data["phone"],
                    data["year"],
                    data["role"],
                )
                resole(contact)
            });
        });
    }
    
    async getFamily(uID: string) {
       let father = await this.getFather(uID);
       let mother = await this.getMother(uID);
       let contact = await this.getContact(uID);
       return [father,mother,contact];
    }

    async getCourse(uID: string) {
        return new Promise<Courses>((resolve, _) => {
            this.firestore.collection(this.studentRef).doc(uID).collection("course").doc("course").valueChanges().subscribe(data => {
                let course = new Courses(
                    data["class"],
                    data["course"],
                    data["role"],
                    data["school_year"]
                );
                resolve(course);
            })

        })

    }

    async getDetailOfHistory() {
        return new Promise<any[]>((resolve, _) => {
            this.firestore.collection(this.studentRef).doc(this.dataStore.uid).collection("history").valueChanges().subscribe(data => {
                let hdls: any[] = []
                data.forEach(e => {
                    hdls.push(new HistoryDetail(
                        e["detail"],
                        e["atUpdate"]
                    ))
                });
                resolve(hdls);
            })

        })
    }


    async getAllStudent() {
        return new Promise<any[]>((resolve, _) => {
            this.firestore.collection(this.adminRef).doc("uids").valueChanges().subscribe((data) => {
                console.log("admin collection", data)
            })
        })
    }



    addDetailIntoHistory(detailHistory: HistoryDetail) {

        this.firestore.collection(this.studentRef).doc(this.dataStore.uid).collection("history").add(detailHistory.toJson());
    }

    updateDetail(detail: Detail) {
        this.firestore.collection(this.studentRef).doc(this.dataStore.uid).collection("detail").doc("detail").update(detail.toJson())
    }

    updateFamily(family: Family[]) {
        this.firestore.collection(this.studentRef).doc(this.dataStore.uid).collection("family").doc("family").collection("families").add(family)
    }

    updateCourse(uID: string, course: Courses) {
        this.firestore.collection(this.studentRef).doc(this.dataStore.uid).collection("course").doc("course").update(course.toJson())

    }




}