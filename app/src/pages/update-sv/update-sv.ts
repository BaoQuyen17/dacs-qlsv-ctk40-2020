import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Detail } from '../../model/detail';
import { Province } from '../../model/province';
import { District } from '../../model/district';
import { LocationProvider } from '../../providers/location-provider';
import { StudentSingleton } from '../../providers/student-singleton';
import { StudentService } from '../../providers/firebase/student-services';
import { HistoryDetail } from '../../model/history';


@IonicPage()
@Component({
  selector: 'page-update-sv',
  templateUrl: 'update-sv.html',
})
export class UpdateSvPage {

  city: any;
  district: any;
  updatePage: any = UpdateSvPage;
  detail: Detail;
  detailHistory: Detail

  cities: Province[];
  districts: District[] = [];
  locationProvider: LocationProvider;


  constructor(public navCtrl: NavController, public navParams: NavParams, locationProvider: LocationProvider, public dataSingletone: StudentSingleton, public studentService: StudentService) {
    this.locationProvider = locationProvider;
    this.detail = this.dataSingletone.student.detail;
    this.detailHistory = this.detail.clone();
    locationProvider.getAllCityOffVietNam().then(
      data => {
        this.cities = data;
      }
    );
  }


  findProvinceIdFormName(name: string): Province {

    let pro: Province;
    this.cities.forEach(
      e => {
        if (e.name == name) {
          pro = e;
        }
      }
    );
    return pro;
  }


  provinceChange($event) {
    let provi = this.findProvinceIdFormName(this.city);
    this.locationProvider.getDistrictOfProvinceID(provi.id).then(
      data => {
        this.districts = data;
      }
    )
  }

  onUpdateClick() {
    let atupdate = new Date().toString()
    this.studentService.addDetailIntoHistory(
      new HistoryDetail(this.detailHistory, atupdate));
    this.studentService.updateDetail(this.detail);
    this.navCtrl.pop()
  }




}
