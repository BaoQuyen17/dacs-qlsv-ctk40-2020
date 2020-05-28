import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../model/student';
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

   constructor(public navCtrl: NavController, public navParams: NavParams, locationProvider: LocationProvider) {
    this.student = new Student('1610193','Na','1610193@dly.edu.vn','17/01/1998','251009677', 'Không', 'Không','143','Việt Nam', 'vvsv','ssgs','Kinh','Lâm Đồng','Đà Lạt', 'Nữ', '0326147171','K40','','','','','12/04/2014','Lâm Đồng','Đà Lạt','K40','CTK40','1610193');
    this.locationProvider = locationProvider;
    locationProvider.getAllCityOffVietNam().then(
      data =>{
        this.cities = data;
      }
    );
  } 
  
  student: Student;


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoSvPage');
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
