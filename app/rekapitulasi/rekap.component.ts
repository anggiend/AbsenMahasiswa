import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Mahasiswa } from '../_models/rekap.model';

import { RekapService } from '../_services/rekap.service';
import { DataService } from '../_services/data.service';

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
  
  
  recordRekap = [];
  Rekap:  Mahasiswa[] = [];

  constructor(private router: Router, private rekapService: RekapService, private dataService: DataService, private http: Http,) {}


  ngOnInit() {

   this.Rekap = this.rekapService.getListRekap();

   this.dataService.httpRekap().subscribe(
      (data) => this.recordRekap = data
    );


  }
}