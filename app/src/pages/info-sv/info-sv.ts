import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { Detail } from '../../model/detail';
import { LocationProvider } from '../../providers/location-provider';
import { Province } from '../../model/province';
import { District } from '../../model/district';
import { UpdateSvPage } from '../update-sv/update-sv';
//import { Student } from '../../model/student';
import { StudentSingleton } from '../../providers/student-singleton';
import { StudentService } from '../../providers/firebase/student-services';


@IonicPage()
@Component({
  selector: 'page-info-sv',
  templateUrl: 'info-sv.html',
})

export class InfoSvPage {

  @ViewChild("refreshRef") refreshRef: Refresher;
  city: string = "dalat";
  updatePage: any = UpdateSvPage;
  district: any;

  cities: Province[];
  districts: District[] = [];
  locationProvider: LocationProvider;
  detail: Detail;


  constructor(public navCtrl: NavController, public navParams: NavParams, locationProvider: LocationProvider, public dataSingletone: StudentSingleton, public studentService: StudentService) {
    this.locationProvider = locationProvider;
    this.detail = this.dataSingletone.student.detail;
    locationProvider.getAllCityOffVietNam().then(
      data => {
        this.cities = data;
      }
    );
  }


  async onRefreshing() {
    let student = await this.studentService.getStudentFromUID();
    this.detail = student.detail;
  }

  async ionViewDidLoad() {
    await this.onRefreshing();
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
    console.log("update click");
    this.navCtrl.push(this.updatePage);
  }

  async doRefresh(event: Refresher) {

    setTimeout(async () => {
      await this.onRefreshing();
      event.complete();

    }, 2000);

  }

}
