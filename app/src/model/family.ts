import { Injectable } from "@angular/core";


@Injectable()
export class Family{
    address:string;
    fullname:string;
    phone:string;
    year:string;
    constructor(    address:string,
        fullname:string,
        phone:string,
        year:string,){
            this.address = address;
            this.fullname  = fullname;
            this.phone = phone;
            this.year = year;
        }
}