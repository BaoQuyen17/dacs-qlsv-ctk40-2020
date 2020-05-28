import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoLlPage } from '../info-ll/info-ll';
import { InfoSvPage } from '../info-sv/info-sv';
import { InfoNtPage } from '../info-nt/info-nt';
import { InfoKhPage } from '../info-kh/info-kh';
import { HistoryPage } from '../history/history';
//import { Detail } from '../../model/detail';
import { Student } from '../../model/student';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  selectedIndex = 0;
  ttsv= InfoSvPage;
  ttll =InfoLlPage;
  ttnt=InfoNtPage;
  ttkh =InfoKhPage;
  ls =HistoryPage;

  student: Student;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.student = this.navParams.data;
  } 

}

