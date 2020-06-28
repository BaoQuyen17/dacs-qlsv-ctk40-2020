import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../providers/firebase/auth-services';
import { StudentService } from '../../providers/firebase/student-services';
import { async } from 'rxjs/internal/scheduler/async';
import { HomePage } from '../home/home';
import { StudentSingleton } from '../../providers/student-singleton';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private myForm: FormGroup;
  username: string;
  password: string;

  readonly APP_USERNAME: string = '1610193';
  readonly APP_PASSWORD: string = '1610193';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private formBuilder: FormBuilder, public authService: AuthService, public studentService: StudentService, private dataSingletone: StudentSingleton) {
    this.myForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

 async login() {
   try{
    let email  =  this.username + "@dlu.edu.vn";
    console.log(email + this.password);
    let uid = await this.authService.doLogin(email,this.password)
    console.log("uid");
    console.log(uid);
    this.dataSingletone.setuid(uid);
     let student = await this.studentService.getStudentFromUID();
    if (student!=null) {
      this.dataSingletone.setStudent(student);
          this.navCtrl.setRoot(HomePage, student);
        } 
   }catch(e){
    let alert = this.alertCtrl.create({
          title: 'Đăng nhập thất bại',
          subTitle: 'Mã số sinh viên hoặc Mật khẩu của bạn không đúng!',
          buttons: ['OK']
        });
        alert.present();
   }
  }

}
