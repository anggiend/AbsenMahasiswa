import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Kelas } from '../_models/kelas';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class KelasService  {
    constructor(private http: Http){ }

    private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

    getAllKelas() : Observable<Kelas[]> {
      return this.http.get('http://api-v2-absensi-mahasiswa.azurewebsites.net/kelas/')
                      .map(res=> this.extractData(res))
                      .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body;
    } 
}