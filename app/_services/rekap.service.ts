import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

import { Mahasiswa } from '../_models/mahasiswa';
//import { Mahasiswa } from '../model/rekap.model';

@Injectable()
export class RekapService {


//  private Mhs: Mahasiswa[] = [];
//  apiUrl: string = 'http://api-absensi-mahasiswa.azurewebsites.net/kelas/'


  constructor(private http: Http){}

  private mahasiswaUrl = "http://2002/Mahasiswa/";

  private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


    getMahasiwa(): Observable<Mahasiswa[]> {
      return this.http.get(this.mahasiswaUrl)
                      .map(res=> this.extractData(res))
                      .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    console.log(body.data);
    console.log(res);
    return body.data;
  }

  	httpMhs(){
		return this.http.get('http://localhost:2002/Mahasiswa/?format=json').map(
			(res) => res.json()
		);
	}


/*    getallMahasiswa(): Promise<Mhs[]> {
        return this.http
         .get(this.apiUrl)
         .map((response: Response) => {
           let mhs = response.json();
           let listMahasiswa = new Array<Mhs>();
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
    }


      getData(): Promise<any> {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(this.Mhs);
              }, 2000);
            });
          }
        }

*/

}
