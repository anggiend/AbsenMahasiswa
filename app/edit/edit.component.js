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
var kelas_service_1 = require("../_services/kelas.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/min");
var EditComponent = (function () {
    function EditComponent(router, mhsService, kelasService) {
        this.router = router;
        this.mhsService = mhsService;
        this.kelasService = kelasService;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getAllKelas();
    };
    EditComponent.prototype.addToMhs = function (nim, tanggal) {
        this.router.navigate(['/edit/', nim, tanggal]);
    };
    EditComponent.prototype.getAllKelas = function () {
        var _this = this;
        this.kelasService.getAllKelas()
            .subscribe(function (kelas) {
            _this.listkelas = kelas;
        }, function (error) { return console.log(error); });
    };
    EditComponent.prototype.getMahasiswa = function (id, date) {
        var _this = this;
        if (date !== null) {
            this.mhsService.getMhsByClass(id, date)
                .subscribe(function (mhs) {
                _this.mhs = mhs;
            }, function (error) { return console.log(error); });
        }
    };
    EditComponent.prototype.onSelect = function (mhs) {
        this.selectedMhs = mhs;
    };
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        providers: [mhs_service_1.MhsService],
        selector: 'edit',
        templateUrl: 'edit.component.html',
        styleUrls: ['../../css/vendor/bootstrap/css/bootstrap.min.css',
            '../../css/vendor/metisMenu/metisMenu.min.css',
            '../../css/dist/css/sb-admin-2.css',
            '../../css/vendor/morrisjs/morris.css',
        ]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, mhs_service_1.MhsService, kelas_service_1.KelasService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map