import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoLlPage } from '../info-ll/info-ll';
import { InfoSvPage } from '../info-sv/info-sv';
import { InfoNtPage } from '../info-nt/info-nt';
import { InfoKhPage } from '../info-kh/info-kh';
import { HistoryPage } from '../history/history';
//import { Detail } from '../../model/detail';
import { Student } from '../../model/student';
import { AdminPage } from '../admin/admin';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  selectedIndex = 0;
  detail = InfoSvPage;
  contact = InfoLlPage;
  family = InfoNtPage;
  course = InfoKhPage;
  history = HistoryPage;
  admin = AdminPage;

  student: Student;

  isStudent = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = this.navParams.data
    this.isStudent = this.student.detail.role == "SV"
  }

}

