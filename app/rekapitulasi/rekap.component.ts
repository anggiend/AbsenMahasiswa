import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Mahasiswa } from '../_models/mahasiswa';

//import { DataService } from '../service/data.service';
import { RekapService } from '../_services/rekap.service';

@Component({
  moduleId: module.id,
  selector: 'rekap',
  templateUrl: 'rekap.component.html',
  styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' , 
  '../../css/vendor/metisMenu/metisMenu.min.css' , 
  '../../css/dist/css/sb-admin-2.css',
  '../../css/vendor/morrisjs/morris.css',
  ],
  providers: [RekapService]
  })

export class RekapComponent implements OnInit {
  
  //dataMhs = [];
  //MHS = [];
  private mhs: Mahasiswa[];
  private keymahasiswa: "mahasiswa";
 
	constructor(
      private router: Router, 
      private rekapService: RekapService,
      private http: Http,
	) { }
	
	ngOnInit() {
			/*this.rekapService.httpMhs().subscribe(
				(data) => this.dataMhs = data.slice(1, 5)
				);
			this.rekapService.httpMhs().subscribe(
				(data) => this.MHS = data
			);*/

	}
/*
		   if (localStorage.getItem(this.keymahasiswa) === null || localStorage.getItem(this.keymahasiswa) === undefined){
			  this.getMahasiswa();
			} else {
			  this.mhs = JSON.parse(localStorage.getItem(this.keymahasiswa));
			  console.log("ISI CATEGORY HOME" + localStorage.getItem(this.keymahasiswa));
			}
		  }

		  getMahasiswa(): void {
			console.log("DATA FROM SERVER");
			this.mhsService.getMahasiwa().subscribe(mahasiswa => { 
			  this.mhs = mahasiswa; localStorage.setItem(this.keymahasiswa, JSON.stringify(mahasiswa)); }, error => console.log(error));
		  }
*/
}