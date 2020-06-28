import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Courses } from '../../model/courses';
import { StudentSingleton } from '../../providers/student-singleton';




@IonicPage()
@Component({
  selector: 'page-info-kh',
  templateUrl: 'info-kh.html',
})
export class InfoKhPage {
  courses: Courses;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataStore: StudentSingleton) {
    this.courses = dataStore.student.courses;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoKhPage');
  }

}
