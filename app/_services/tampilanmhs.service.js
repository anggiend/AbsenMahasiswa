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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
var TampilanmhsService = (function () {
    function TampilanmhsService(http) {
        this.http = http;
        // smartTablePageSize = 50;
        this.mahasiswaUrl = "http://api-v2-absensi-mahasiswa.azurewebsites.net/me/absensi";
        this.header = new http_1.Headers();
        this.header.append('Conten-type', 'application/json');
    }
    TampilanmhsService.prototype.getMhsByLog = function () {
        var _this = this;
        return this.http.get(this.mahasiswaUrl).map(function (res) { return _this.extractData(res); }).catch(this.handleError);
    };
    TampilanmhsService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    TampilanmhsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TampilanmhsService;
}());
TampilanmhsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TampilanmhsService);
exports.TampilanmhsService = TampilanmhsService;
//# sourceMappingURL=tampilanmhs.service.js.map