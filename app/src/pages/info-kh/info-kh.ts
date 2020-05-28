import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../model/student';

/**
 * Generated class for the InfoKhPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-kh',
  templateUrl: 'info-kh.html',
})
export class InfoKhPage {
  student: Student;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.student = new Student('1610193','Na','1610193@dly.edu.vn','17/01/1998','251009677', 'Không', 'Không','143','Việt Nam', 'vvsv','ssgs','Kinh','Lâm Đồng','Đà Lạt', 'Nữ', '0326147171','K40','','','','','12/04/2014','Lâm Đồng','Đà Lạt','K40','CTK40','1610193');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoKhPage');
  }

}
