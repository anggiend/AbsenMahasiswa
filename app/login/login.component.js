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
var router_1 = require('@angular/router');
var login_service_1 = require('../_services/login.service');
var LoginComponent = (function () {
    function LoginComponent(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.user = { username: "1412002", password: "anggiend" };
        this.loading = false;
        this.data = {};
    }
    LoginComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home/']);
    };
    LoginComponent.prototype.gotoLogin = function () {
        this.router.navigate(['/login/']);
    };
    LoginComponent.prototype.gotoAuth = function () {
        var _this = this;
        this.loginservice.getAuth(this.user).subscribe(function (data) {
            _this.data = data;
        }, function (error) { return console.log(error); });
        console.log(this.data.success);
        if (this.data.success === true) {
            if (this.data.type === 'mahasiswa') {
                this.router.navigate(['/tampilanmhs/']);
            }
            else {
                this.router.navigate(['/absen/']);
            }
        }
    };
    LoginComponent.prototype.gotoTampilanMhs = function () {
        this.router.navigate(['/tampilanmhs/']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['../../css/vendor/bootstrap/css/bootstrap.min.css',
                '../../css/vendor/metisMenu/metisMenu.min.css',
                '../../css/dist/css/sb-admin-2.css',
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map