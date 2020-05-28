import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Family } from '../../model/family';
import { UpdateNtPage } from '../update-nt/update-nt';



@IonicPage()
@Component({
  selector: 'page-info-nt',
  templateUrl: 'info-nt.html',
})
export class InfoNtPage {
  family: Family;
  updatePage: any = UpdateNtPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.family = new Student('1610193','Na','1610193@dlu.edu.vn','17/01/1998','251009677', 'Không', 'Không','143','Việt Nam', 'vvsv','ssgs','Kinh','Lâm Đồng','Đà Lạt', 'Nữ', '0326147171','K40','','','','','12/04/2014','Lâm Đồng','Đà Lạt','K40','CTK40','1610193');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoNtPage');
  }
 
  onUpdateClick(){
    console.log("update click");
    this.navCtrl.push(this.updatePage);
  }
}
