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
var MhsService = (function () {
    function MhsService(http) {
        this.http = http;
    }
    MhsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MhsService.prototype.getMhsByClass = function (id, date) {
        var _this = this;
        return this.http.get('http://api-v2-absensi-mahasiswa.azurewebsites.net/absensi/totaljamperkelas/' + id + '/tanggal/' + date)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    MhsService.prototype.getMhsByLogin = function (nim, tanggal) {
        var _this = this;
        return this.http.get('http://api-v2-absensi-mahasiswa.azurewebsites.net/absensi/' + nim + '/' + tanggal)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    MhsService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    MhsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MhsService);
    return MhsService;
}());
exports.MhsService = MhsService;
//# sourceMappingURL=mhs.service.js.map