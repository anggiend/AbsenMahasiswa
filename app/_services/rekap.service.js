"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/from");
var RekapService = (function () {
    function RekapService() {
        this.rekap = [];
    }
    RekapService.prototype.getListRekap = function () {
        return this.rekap;
    };
    return RekapService;
}());
RekapService = __decorate([
    core_1.Injectable()
], RekapService);
exports.RekapService = RekapService;
//# sourceMappingURL=rekap.service.js.map