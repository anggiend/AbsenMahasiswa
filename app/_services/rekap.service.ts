import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


import { Mahasiswa } from '../_models/rekap.model';

@Injectable()
export class RekapService {


    private rekap: Mahasiswa[] = [];

    getListRekap(){
        return this.rekap;
    }	  	    
}