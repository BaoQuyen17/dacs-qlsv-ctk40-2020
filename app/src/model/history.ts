import { Student } from "./student";
import { Injector, Injectable } from "@angular/core";
import { Detail } from "./detail";


@Injectable()
export class HistoryDetail{

    detail: Detail
    atUpdate: string

    constructor(detail: Detail, atUpdate: string){
        this.detail = detail;
        this.atUpdate = atUpdate;
    }

    toJson(){
        return {
            'detail':this.detail.toJson(),
            'atUpdate':this.atUpdate
        }
    }

    getDetailNewInstance(){
        return new Detail(
            this.detail.id,
            this.detail.email,
            this.detail.birth,
            this.detail.identity_card,
            this.detail.religion,
            this.detail.object,
            this.detail.address,
            this.detail.nation,
            this.detail.CYU_date,
            this.detail.CPGB_date,
            this.detail.country,
            this.detail.district,
            this.detail.gender,
            this.detail.phone,
            this.detail.lastname,
            this.detail.firstname,
            this.detail.id_c_date,
            this.detail.id_c_province,
            this.detail.role,
        )
    }


}