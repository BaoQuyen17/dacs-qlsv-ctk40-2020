import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentSingleton } from '../../providers/student-singleton';
import { Family } from '../../model/family';


@IonicPage()
@Component({
  selector: 'page-info-ll',
  templateUrl: 'info-ll.html',
})
export class InfoLlPage {

  families: Family[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataStore: StudentSingleton) {
    
    this.families = dataStore.student.family;
    
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoLlPage');
  }

}
