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
    CPGB_date: string;
    country: string;
    district: string;
    gender: string;
    phone: string;
    lastname: string;
    firstname: string;
    id_c_date: string;
    id_c_province: string;
    role: string;

    constructor(id: string, email: string, birth: string, identity: string, religion: string,
        object: string, address: string, nation: string, CYU_date: string, GPCB_date: string,
        country: string, district: string, gender: string, phone: string,
        lastname: string, firstname: string, id_c_date: string, id_c_province: string, role: string) {
        this.id = id;
        this.email = email;
        this.birth = birth;
        this.identity_card = identity
        this.religion = religion;
        this.object = object;
        this.address = address;
        this.nation = nation;
        this.CYU_date = CYU_date;
        this.CPGB_date = GPCB_date;
        this.country = country;
        this.district = district;
        this.gender = gender;
        this.phone = phone;
        this.lastname = lastname;
        this.firstname = firstname;
        this.id_c_date = id_c_date;
        this.id_c_province = id_c_province;
        this.role = role;
    }

    toJson(){
        return {
            'CPGB_date': this.CPGB_date == null? "":this.CPGB_date,
            'CYU_date': this.CYU_date == null? "" :this.CYU_date,
            'address': this.address,
            'birth': this.birth,
            'country': this.country,
            'district': this.district,
            'email': this.email,
            'firstname': this.firstname,
            'gender': this.gender,
            'id': this.id == null ?"":this.id,
            'id_c_date': this.id_c_date == null? "": this.id_c_date,
            'id_c_province': this.id_c_province == null? "":this.id_c_province,
            'identity_card': this.identity_card == null? "": this.identity_card,
            'lastname': this.lastname,
            'nation': this.nation,
            'object': this.object == null ? "":this.object,
            'phone': this.phone,
            'religion': this.religion,
            'role': this.role
        }
    }

    clone(){
        return new Detail(
            this.id,
            this.email,
            this.birth,
            this.identity_card,
            this.religion,
            this.object,
            this.address,
            this.nation,
            this.CYU_date,
            this.CPGB_date,
            this.country,
            this.district,
            this.gender,
            this.phone,
            this.lastname,
            this.firstname,
            this.id_c_date,
            this.id_c_province,
            this.role,
        );
    }


}