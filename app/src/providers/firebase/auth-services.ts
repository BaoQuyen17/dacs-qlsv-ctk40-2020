import { Injectable } from "@angular/core";
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService{


    constructor(public fbAuth: AngularFireAuth){

    }

    async start(){

    }

    doLogin(id: string, password: string){
        return new Promise<any>((resolve, inject)=>{
            firebase.auth().signInWithEmailAndPassword(id,password).then(
                res => {
                    let uid = res.user.uid;
                    console.log("uid form auth service: "+uid);
                    resolve(uid);
                },
                err => inject(err)
            )
        })
    }


    // doLogout(){
    //     return new Promise<any>((resolve, inject)=>{
    //         this.fbAuth.signOut().then(
    //             res => resolve(res),
    //             err => inject(err)
    //         )
    //     })
    // }
}