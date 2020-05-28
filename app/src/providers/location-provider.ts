import { Injectable } from "@angular/core";
import { Province } from "../model/province";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { District } from "../model/district";

@Injectable()
export class LocationProvider{
    
    constructor(private http:HttpClient){}
    provinces:Province[];
    endpoint: string = "https://vapi.vnappmob.com"

    async getAllCityOffVietNam(){
        let tempProvince: Province[] = [];
     await this.http.get(this.endpoint+"/api/province/").subscribe(
        data =>{
            let result: any[] = data["results"];
            result.forEach(element => {
                
                tempProvince.push(new Province(element["province_id"],element["province_name"],element["province_type"]));
            });

         
        }
    );

        return tempProvince;
  
    }


    async getDistrictOfProvinceID(id:string){
        console.log("get District of province id of "+ id);
        let tempDistrict: District[] = [];
     await this.http.get(this.endpoint+"/api/province/district/"+id).subscribe(
        data =>{
            let result: any[] = data["results"];
            result.forEach(element => {
                tempDistrict.push(new District(element["district_id"],element["district_name"],element["district_type"]));
            });

         
        }
    );
    console.log("districts");
    console.log(tempDistrict);
        return tempDistrict;
    }
}