import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Family } from '../../model/family';
import { UpdateNtPage } from '../update-nt/update-nt';
import {Detail} from '../../model/detail';
import { StudentSingleton } from '../../providers/student-singleton';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';



@IonicPage()
@Component({
  selector: 'page-info-nt',
  templateUrl: 'info-nt.html',
})
export class InfoNtPage {
  families: Family[] = []
  updatePage: any = UpdateNtPage
  contact: Family

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataSingletone: StudentSingleton) {
     this.families = this.dataSingletone.student.family;
     this.families.forEach(e=>{
      if(e.role == "contact"){
        this.contact = e
      }
    })
    
  }

  ionViewDidLoad() {
    this.families.forEach(e=>{
      if(e.role == "contact"){
        this.contact = e
      }
    })
  }
 
  onUpdateClick(){
    console.log("update click");
    this.navCtrl.push(this.updatePage);
  }
}
