import { Component,OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { LoginService } from '../_services/login.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' , 
  '../../css/vendor/metisMenu/metisMenu.min.css' , 
  '../../css/dist/css/sb-admin-2.css',
  ]
  })

export class LoginComponent{
    user: User = {username : "1412002" , password : "anggiend"};
    loading = false;
    data: any = {};

    constructor(
    private router: Router,
    private loginservice: LoginService) { }

	  gotoHome(): void {
      this.router.navigate(['/home/']);}

    gotoLogin(): void {
      this.router.navigate(['/login/']);}

    gotoAuth(){
        this.loginservice.getAuth(this.user).subscribe(data => { 
        this.data = data;}, error => console.log(error));
        console.log(this.data.success);
        if(this.data.success === true){
          if(this.data.type === 'mahasiswa'){
            this.router.navigate(['/tampilanmhs/']);
          }
          else{
            this.router.navigate(['/absen/']);
          }
        }
    }

    gotoTampilanMhs(): void {
      this.router.navigate(['/tampilanmhs/']);}   
}