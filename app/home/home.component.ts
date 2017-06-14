import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: 'home.component.html',
  styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' , 
  '../../css/vendor/metisMenu/metisMenu.min.css' , 
  '../../css/dist/css/sb-admin-2.css',
  '../../css/vendor/morrisjs/morris.css',
  'home.component.css'
  ]
  })

export class HomeComponent {
  

  constructor(
    private router: Router) { }

	gotoHome(): void {
      this.router.navigate(['/home/']);}

  gotoLogin(): void {
      this.router.navigate(['/login/']);}
}
