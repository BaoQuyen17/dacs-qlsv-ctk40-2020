import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Refresher } from 'ionic-angular';
import { StudentService } from '../../providers/firebase/student-services';
import { HistoryDetail } from '../../model/history';
import { StudentSingleton } from '../../providers/student-singleton';


@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  @ViewChild("refreshRef") refreshRef: Refresher;
  history: HistoryDetail[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public studentService: StudentService, public dataStore: StudentSingleton) {
    

  }

  async ionViewDidLoad() {
    await this.onfreshing();
  }

  async onfreshing(){
    this.history = await this.studentService.getDetailOfHistory();
     console.log("history of ts ")
     console.log(this.history)
  }

   itemClick(item: HistoryDetail){
     let detail = this.dataStore.student.detail.clone()
    this.studentService.addDetailIntoHistory(
     new HistoryDetail(
     detail,
      new Date().toString()
     )
    );
    
    this.studentService.updateDetail(item.getDetailNewInstance())
  }
  async doRefresh(event:Refresher){

    setTimeout( async() => {
      await this.onfreshing()
      event.complete();
 
    }, 2000);

}

}
