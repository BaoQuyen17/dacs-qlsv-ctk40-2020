import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../model/student';
import {AuthService} from '../../providers/firebase/auth-services';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private myForm: FormGroup;
  username: string;
  password: string;
  students: Student[] = [];
  student: Student;

  readonly APP_USERNAME: string = '1610193';
  readonly APP_PASSWORD: string = '1610193';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private formBuilder: FormBuilder, public authService: AuthService) {
 // this.student = new Student('1610193','Na','1610193@dly.edu.vn','17/01/1998','251009677', 'Không', 'Không','143','Việt Nam', 'vvsv','ssgs','Kinh','Lâm Đồng','Đà Lạt', 'Nữ', '0326147171','K40','','','','','12/04/2014','Lâm Đồng','Đà Lạt','K40','CTK40','1610193');
    this.myForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

 async login() {
    let res = await this.authService.doLogin(this.username.trim() + "@dlu.edu.vn",this.password)
    console.log("res");
    console.log(res);
    // if(this.password != this.APP_PASSWORD || this.username != this.APP_USERNAME){
    //   let alert = this.alertCtrl.create({
    //     title: 'Đăng nhập thất bại',
    //     subTitle: 'Mã số sinh viên hoặc Mật khẩu của bạn không đúng!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }else{
    //   if (this.username == this.APP_USERNAME && this.password == this.APP_PASSWORD) {
    //     this.navCtrl.setRoot(HomePage,this.student);
    //   } 
    // }
  }

}
