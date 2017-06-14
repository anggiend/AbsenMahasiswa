import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Mahasiswa } from '../_models/mahasiswa';
import 'rxjs/add/observable/from';


@Injectable()
export class TampilanmhsService {

  // smartTablePageSize = 50;
  private mahasiswaUrl = "http://api-v2-absensi-mahasiswa.azurewebsites.net/me/absensi";
  private header: Headers;
  private mahasiswa : Mahasiswa[];
  constructor(private http: Http){
    this.header = new Headers();
    this.header.append('Conten-type','application/json');

  }

  getMhsByLog() : Observable<any>{
      return this.http.get(this.mahasiswaUrl).map(res=> this.extractData(res)).catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body;
  }

    
  private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

 /*getMahasiswa(): Promise<Mahasiswa[]> {
    return this.http
      .get(this.mahasiswaUrl)
      .map((response: Response) => {
        let mhs = response.json();
        let listMahasiswa = new Array<Mahasiswa>();
        let i : number;
        for(i=0;i<mhs.length;i++)
        {
          listMahasiswa.push(
          {
            nama: mhs.results[i].namaMahasiswa,
            nim: mhs.results[i].nimMahasiswa,
          });
        }
        return listMahasiswa;
      }).toPromise()
      .catch(this.handleError);
  }*/
}