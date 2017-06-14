"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/from');
//import { Mahasiswa } from '../model/rekap.model';
var RekapService = (function () {
    //  private Mhs: Mahasiswa[] = [];
    //  apiUrl: string = 'http://api-absensi-mahasiswa.azurewebsites.net/kelas/'
    function RekapService(http) {
        this.http = http;
        this.mahasiswaUrl = "http://2002/Mahasiswa/";
    }
    RekapService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RekapService.prototype.getMahasiwa = function () {
        var _this = this;
        return this.http.get(this.mahasiswaUrl)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    RekapService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body.data);
        console.log(res);
        return body.data;
    };
    RekapService.prototype.httpMhs = function () {
        return this.http.get('http://localhost:2002/Mahasiswa/?format=json').map(function (res) { return res.json(); });
    };
    RekapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RekapService);
    return RekapService;
}());
exports.RekapService = RekapService;
//# sourceMappingURL=rekap.service.js.map