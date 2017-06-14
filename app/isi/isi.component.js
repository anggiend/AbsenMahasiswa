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
var mhs_service_1 = require("../_services/mhs.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/min");
var IsiComponent = (function () {
    function IsiComponent(router, mhsService, activatedRoute) {
        this.router = router;
        this.mhsService = mhsService;
        this.activatedRoute = activatedRoute;
        this.title = 'Tour of Mhs';
        this.selectedDevice = ' ';
    }
    IsiComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedDevice = newValue;
    };
    IsiComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            _this.nim = params['nim'];
            _this.date = params['tanggal'];
        });
        this.getMhs();
    };
    IsiComponent.prototype.getMhs = function () {
        var _this = this;
        this.mhsService.getMhsByLogin(this.nim, this.date)
            .subscribe(function (mhs) {
            _this.mhs = mhs;
        }, function (error) { return console.log(error); });
    };
    ;
    return IsiComponent;
}());
IsiComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        providers: [mhs_service_1.MhsService],
        selector: 'isi',
        templateUrl: 'isi.component.html',
        styleUrls: ['../../css/vendor/bootstrap/css/bootstrap.min.css',
            '../../css/dist/css/sb-admin-2.css',
            '../../css/vendor/morrisjs/morris.css',
        ]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, mhs_service_1.MhsService, router_1.ActivatedRoute])
], IsiComponent);
exports.IsiComponent = IsiComponent;
//# sourceMappingURL=isi.component.js.map