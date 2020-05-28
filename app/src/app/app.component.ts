import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HomePage } from '../pages/home/home';
import { LocationProvider } from '../providers/location-provider';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/firebase/auth-services';
import { StudentService } from '../providers/firebase/student-services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, locationProvider: LocationProvider, authService: AuthService, studentService: StudentService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      locationProvider.getAllCityOffVietNam();
      authService.start();
      studentService.start();
    });
  }
}
