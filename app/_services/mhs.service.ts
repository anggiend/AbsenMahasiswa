import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Mhs } from '../_models/mhs';
import { MHS } from '../mock/mockMhs';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MhsService {
  constructor(private http: Http){ }

    private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

    getMhsByClass(id: number,date: string) : Observable<Mhs> {
      return this.http.get('http://api-v2-absensi-mahasiswa.azurewebsites.net/absensi/totaljamperkelas/'+id+'/tanggal/'+date)
                      .map(res=> this.extractData(res))
                      .catch(this.handleError);
    }

    getMhsByLogin(nim: string,tanggal: string) : Observable<Mhs> {
      return this.http.get('http://api-v2-absensi-mahasiswa.azurewebsites.net/absensi/'+nim+'/'+tanggal)
                      .map(res=> this.extractData(res))
                      .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body;
    } 
}

