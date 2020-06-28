import { Injectable } from "@angular/core";


@Injectable()
export class Family {
    address: string;
    fullname: string;
    phone: string;
    year: string;
    role: string
    constructor(address: string,
        fullname: string,
        phone: string,
        year: string,
        role:string ) {
        this.address = address;
        this.fullname = fullname;
        this.phone = phone;
        this.year = year;
        this.role = role
    }
    toJson() {
        return {
            'address': this.address,
            'fullname': this.fullname,
            'phone': this.phone,
            'year': this.year,
            'role':this.role
        }
    }
}