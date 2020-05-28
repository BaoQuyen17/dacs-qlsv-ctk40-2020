import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InfoSvPage } from '../pages/info-sv/info-sv';
import { InfoLlPage } from '../pages/info-ll/info-ll';
import { InfoKhPage } from '../pages/info-kh/info-kh';
import { InfoNtPage } from '../pages/info-nt/info-nt';
import { UpdateNtPage} from'../pages/update-nt/update-nt';
import { UpdateSvPage} from'../pages/update-sv/update-sv';
import { LocationProvider } from '../providers/location-provider';
import { HttpClientModule } from '@angular/common/http';
import { HistoryPage } from '../pages/history/history';
import {AuthService} from '../providers/firebase/auth-services';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { StudentService } from '../providers/firebase/student-services';
import { AngularFirestore } from 'angularfire2/firestore';
import { StudentSingleton } from '../providers/student-singleton';


const enviroment = {
    apiKey: "AIzaSyBebDxW6UGmirztgi2Hls0kS7KFtEYKOh4",
    authDomain: "dacs-qlsv-ctk40.firebaseapp.com",
    databaseURL: "https://dacs-qlsv-ctk40.firebaseio.com",
    projectId: "dacs-qlsv-ctk40",
    storageBucket: "dacs-qlsv-ctk40.appspot.com",
    messagingSenderId: "955947666854",
    appId: "1:955947666854:web:17c7ff0660a2c7aad15367",
    measurementId: "G-GHY871WLZH"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InfoSvPage,
    InfoLlPage,
    InfoNtPage,
    InfoKhPage,
    UpdateSvPage,
    UpdateNtPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(enviroment),
    AngularFireModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InfoSvPage,
    InfoLlPage,
    InfoNtPage,
    InfoKhPage,
    UpdateSvPage,
    UpdateNtPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocationProvider,
    AuthService,
    AngularFireAuth,
    StudentService,
    AngularFirestore,
    StudentSingleton,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
