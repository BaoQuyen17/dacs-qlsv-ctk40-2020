import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Detail } from '../../model/detail';
import { Province } from '../../model/province';
import { District } from '../../model/district';
import { LocationProvider } from '../../providers/location-provider';


@IonicPage()
@Component({
  selector: 'page-update-sv',
  templateUrl: 'update-sv.html',
})
export class UpdateSvPage {

  city :any;
  district:any;
  updatePage: any = UpdateSvPage;

  cities:Province[];
  districts: District[] = [];
  locationProvider: LocationProvider;
  detail: Detail;

   constructor(public navCtrl: NavController, public navParams: NavParams, locationProvider: LocationProvider) {
    this.locationProvider = locationProvider;
    locationProvider.getAllCityOffVietNam().then(
      data =>{
        this.cities = data;
      }
    );
  } 


  findProvinceIdFormName(name: string):Province{
  
    let pro: Province;
    this.cities.forEach(
      e=>{
        if(e.name == name){
         pro = e;
        }
      }
    );
    return pro;
  }


  provinceChange($event){
    let provi = this.findProvinceIdFormName(this.city);
    this.locationProvider.getDistrictOfProvinceID(provi.id).then(
      data =>{
        this.districts = data;
      }
    )
  }
}
