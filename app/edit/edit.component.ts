import { Component, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Mhs} from '../_models/mhs';
import {Kelas} from '../_models/kelas';
import {MhsService} from '../_services/mhs.service';
import {KelasService} from '../_services/kelas.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';



@Component({
moduleId: module.id,
providers: [MhsService],
selector: 'edit',
templateUrl: 'edit.component.html',
styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' ,
'../../css/vendor/metisMenu/metisMenu.min.css' ,
'../../css/dist/css/sb-admin-2.css',
'../../css/vendor/morrisjs/morris.css',
]
})

@Injectable()
export class EditComponent {

constructor(private router: Router, private mhsService: MhsService, private kelasService: KelasService) { }

 mhs : Mhs;
 listkelas : Kelas[];
 selectedMhs: Mhs;

 ngOnInit(): void {
   this.getAllKelas();
 }

addToMhs(nim: string,tanggal: string){
  this.router.navigate(['/edit/',nim,tanggal]);
}

getAllKelas(): void {
    this.kelasService.getAllKelas()
    .subscribe(kelas => { 
      this.listkelas = kelas;}, error => console.log(error));
  }

getMahasiswa(id: number,date: string): void {
  if(date !== null){
   this.mhsService.getMhsByClass(id,date)
    .subscribe(mhs => { 
      this.mhs = mhs;}, error => console.log(error));
  }
}

onSelect(mhs: Mhs): void {
   this.selectedMhs = mhs;
 }

}
