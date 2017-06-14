import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	
	constructor(private http: Http) {}
	
	httpRekap(){
		return this.http.get('http://api-v2-absensi-mahasiswa.azurewebsites.net/absensi/rekapsemester/4/idsemester/1?format=json?format=json').map(
			(res) => res.json()
		);
	}

	


}