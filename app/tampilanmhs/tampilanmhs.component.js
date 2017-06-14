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
var tampilanmhs_service_1 = require('../_services/tampilanmhs.service');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var TampilanMhsComponent = (function () {
    function TampilanMhsComponent(tampilanmhsService) {
        this.tampilanmhsService = tampilanmhsService;
        this.riwayat = {};
    }
    TampilanMhsComponent.prototype.ngOnInit = function () {
        this.getMahasiswa();
    };
    TampilanMhsComponent.prototype.getMahasiswa = function () {
        var _this = this;
        this.tampilanmhsService.getMhsByLog()
            .subscribe(function (mhs) { _this.riwayat = mhs; }, function (error) { return console.log(error); });
        console.log(this.riwayat.sakit);
    };
    TampilanMhsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tampilanmhs',
            templateUrl: 'tampilanmhs.component.html',
            styleUrls: ['../../css/vendor/bootstrap/css/bootstrap.min.css',
                '../../css/vendor/metisMenu/metisMenu.min.css',
                '../../css/dist/css/sb-admin-2.css',
                '../../css/vendor/morrisjs/morris.css',
                './tampilanmhs.component.css'
            ],
            providers: [tampilanmhs_service_1.TampilanmhsService]
        }), 
        __metadata('design:paramtypes', [tampilanmhs_service_1.TampilanmhsService])
    ], TampilanMhsComponent);
    return TampilanMhsComponent;
}());
exports.TampilanMhsComponent = TampilanMhsComponent;
//# sourceMappingURL=tampilanmhs.component.js.map