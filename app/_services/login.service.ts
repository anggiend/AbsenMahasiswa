import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    constructor(private http: Http){ }

    getAuth(user: User) : Observable<any>{
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers});
        return this.http.post('http://api-v2-absensi-mahasiswa.azurewebsites.net/login',JSON.stringify(user),options)
        .map(res=> this.extractData(res))
                      .catch(this.handleError); 
    }

    private handleError(error: Response | any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

    private extractData(res: Response){
        let body = res.json();
        return body;
    } 
}