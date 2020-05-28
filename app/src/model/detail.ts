import { Injectable } from "@angular/core";


@Injectable()
export class Detail {
    id: string;
    email: string;
    birth: string;
    identity_card: string;
    religion: string;
    object: string;
    address: string;
    nation: string;
    CYU_date: string;
    GPCB_date: string;
    country: string;
    district: string;
    gender: string;
    phone: string;
    lastname: string;
    firstname: string;
    id_c_date: string;
    id_c_province: string;

    constructor(id: string , email: string, birth: string, identity: string, religion: string,
        object: string, address: string, nation: string, CYU_date: string, GPCB_date: string,
        country: string, district: string,gender: string, phone: string,
        lastname:string,firstname:string,id_c_date:string,id_c_province:string) {
        this.id = id;
        this.email = email; 
        this.birth = birth;
        this.religion = religion;
        this.object = object;
        this.address = address;
        this.nation = nation;
        this.CYU_date = CYU_date;
        this.GPCB_date = GPCB_date;
        this.country = country;
        this.district = district;
        this.gender = gender;
        this.phone = phone;
        this.lastname = lastname;
        this.firstname = firstname;
        this.id_c_date = id_c_date;
        this.id_c_province = id_c_province;
    }
}