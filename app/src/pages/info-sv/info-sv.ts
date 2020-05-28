import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Student} from '../../model/student';
import { LocationProvider } from '../../providers/location-provider';
import { Province } from '../../model/province';
import { District } from '../../model/district';
import { UpdateSvPage } from '../update-sv/update-sv';


@IonicPage()
@Component({
  selector: 'page-info-sv',
  templateUrl: 'info-sv.html',
})
export class InfoSvPage {
 
  city :string = "dalat";
  updatePage: any = UpdateSvPage;
  district:any;

  cities:Province[];
  districts: District[] = [];
  locationProvider: LocationProvider;
   student: Student;

   constructor(public navCtrl: NavController, public navParams: NavParams, locationProvider: LocationProvider) {
    this.student = new Student('1610193','Na','1610193@dly.edu.vn','17/01/1998','251009677', 'Không', 'Không','143','Việt Nam', 'vvsv','ssgs','Kinh','Lâm Đồng','Đà Lạt', 'Nữ', '0326147171','K40','','','','','12/04/2014','Lâm Đồng','Đà Lạt','K40','CTK40','1610193');
  
    // 1610193@dly.edu.vn','17/01/1998','251009677', 'Không', 'Không','143','Việt Nam', 'vvsv','ssgs','Kinh','Lâm Đồng','Đà Lạt', 'Nữ', '0326147171','K40','','','','','12/04/2014','Lâm Đồng','Đà Lạt','K40','CTK40');
    this.locationProvider = locationProvider;
    locationProvider.getAllCityOffVietNam().then(
      data =>{
        this.cities = data;
      }
    );
  } 
  


  // static  setStudent(value: Student){
  //   this.student =value;
  // }


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

  onUpdateClick(){
    console.log("update click");
    this.navCtrl.push(this.updatePage);
  }
 
}
