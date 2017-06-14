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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
//import { DataService } from '../service/data.service';
var rekap_service_1 = require("../_services/rekap.service");
var RekapComponent = (function () {
    function RekapComponent(router, rekapService, http) {
        this.router = router;
        this.rekapService = rekapService;
        this.http = http;
    }
    RekapComponent.prototype.ngOnInit = function () {
        /*this.rekapService.httpMhs().subscribe(
            (data) => this.dataMhs = data.slice(1, 5)
            );
        this.rekapService.httpMhs().subscribe(
            (data) => this.MHS = data
        );*/
    };
    return RekapComponent;
}());
RekapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rekap',
        templateUrl: 'rekap.component.html',
        styleUrls: ['../../css/vendor/bootstrap/css/bootstrap.min.css',
            '../../css/vendor/metisMenu/metisMenu.min.css',
            '../../css/dist/css/sb-admin-2.css',
            '../../css/vendor/morrisjs/morris.css',
        ],
        providers: [rekap_service_1.RekapService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        rekap_service_1.RekapService,
        http_1.Http])
], RekapComponent);
exports.RekapComponent = RekapComponent;
//# sourceMappingURL=rekap.component.js.map