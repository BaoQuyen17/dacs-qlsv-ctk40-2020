import { Injectable } from "@angular/core";


@Injectable()
export class Student {
    id: string;
    fullname: string;
    email: string;
    birth: string;
    CMND: string;
    religion: string;
    object: string;
    address: string;
    nation: string;
    DateDoan: string;
    DateDang: string;
    nations: string;
    district: string;
    city: string;
    sex: string;
    phone: string;
    course:string;
    lastname: string;
    firstname: string;
    job: string;
    year: string;
    dateCMND: string;
    addressCMND: string;
    born: string;
    schoolyear:string;
    classs:string;
    password: string;

    constructor(id: string ,fullname: string, email: string, birth: string, CMND: string, religion: string,
        object: string, address: string, nation: string, DateDoan: string, DateDang: string,
        nations: string, district: string, city: string, sex: string, phone: string,course:string,
        lastname:string,firstname:string, job:string,year:string,dateCMND:string,addressCMND:string,born:string,
        schoolyear:string , classs:string,password:string) {
        this.id = id;
        this.fullname = fullname;
        this.email = email; 
        this.birth = birth;
        this.CMND = CMND;
        this.religion = religion;
        this.object = object;
        this.address = address;
        this.nation = nation;
        this.DateDoan = DateDoan;
        this.DateDang = DateDang;
        this.nations = nations;
        this.district = district;
        this.city = city;
        this.sex = sex;
        this.phone = phone;
        this.course = course;
        this.lastname = lastname;
        this.firstname = firstname;
        this.job = job;
        this.dateCMND = dateCMND;
        this.addressCMND = addressCMND;
        this.year = year;
        this.born = born;
        this.schoolyear = schoolyear;
        this.classs = classs;
        this.password=password;

    }
}