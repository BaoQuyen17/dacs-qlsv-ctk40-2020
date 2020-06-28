import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Family } from '../../model/family';
import { StudentSingleton } from '../../providers/student-singleton';
import { StudentService } from '../../providers/firebase/student-services';



@IonicPage()
@Component({
  selector: 'page-update-nt',
  templateUrl: 'update-nt.html',
})
export class UpdateNtPage {
  families: Family[];
  contact: Family
  father: Family;
  mother: Family;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataSingletone: StudentSingleton, public studentService: StudentService) {
   this.families = this.dataSingletone.student.family;
    this.findRole();
}

findRole(){
  this.families.forEach((fam)=>{
    if(fam.role == "contact"){
      this.contact = fam;
    } else if(fam.role == "mother"){
      this.mother = fam;
    }else{
      this.father = fam;
    }
   })
}
  
  ionViewDidLoad() {
    this.findRole();
  }


  onUpdateClick(){
    this.studentService.updateFamily(this.families);
  }
}
