import { Component, Injectable, OnInit} from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import {Mhs} from '../_models/mhs';
import {MhsService} from '../_services/mhs.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';


@Component({
  moduleId: module.id,
  providers: [MhsService],
  selector: 'isi',
  templateUrl: 'isi.component.html',
  styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' ,
  '../../css/dist/css/sb-admin-2.css',
  '../../css/vendor/morrisjs/morris.css',
  ]
  })
@Injectable()
export class IsiComponent implements OnInit{

title = 'Tour of Mhs';
 mhs: Mhs;
 nim: string;
 date: string;

selectedDevice = ' ';
  onChange(newValue : any) {
    console.log(newValue);
    this.selectedDevice = newValue;
    }

 constructor(private router: Router, private mhsService: MhsService, private activatedRoute: ActivatedRoute) { }
 
 ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.nim = params['nim'];
        this.date = params['tanggal'];
      });
    this.getMhs();
  }

 getMhs(): void {
    this.mhsService.getMhsByLogin(this.nim,this.date)
    .subscribe(mhs => { 
      this.mhs = mhs;}, error => console.log(error));
  };
 }
}
