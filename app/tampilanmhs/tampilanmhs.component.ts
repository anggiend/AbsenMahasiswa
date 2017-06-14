import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Mahasiswa } from '../_models/mahasiswa';
import { TampilanmhsService} from '../_services/tampilanmhs.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  moduleId: module.id,
  selector: 'tampilanmhs',
  templateUrl: 'tampilanmhs.component.html',
  styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' , 
  '../../css/vendor/metisMenu/metisMenu.min.css' , 
  '../../css/dist/css/sb-admin-2.css',
  '../../css/vendor/morrisjs/morris.css',
  './tampilanmhs.component.css'
  ],
  providers: [TampilanmhsService]
})



export class TampilanMhsComponent implements OnInit{
  private riwayat : any = {};
  private keymahasiswa: "mahasiswa";
  constructor(private tampilanmhsService: TampilanmhsService){ }

  ngOnInit() {
    this.getMahasiswa();
  }

  getMahasiswa(): void {
    this.tampilanmhsService.getMhsByLog()
                  .subscribe(mhs => { this.riwayat = mhs;},
                  error => console.log(error));
                  console.log(this.riwayat.sakit);
  }
}
 