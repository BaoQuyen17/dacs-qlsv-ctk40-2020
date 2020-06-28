import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentService } from '../../providers/firebase/student-services';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})

export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public studentService: StudentService) {
  }

 async ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
    await this.studentService.getAllStudent();
    
  }

}
