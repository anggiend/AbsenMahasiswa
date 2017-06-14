"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var tampilanmhs_component_1 = require("./tampilanmhs/tampilanmhs.component");
var login_service_1 = require("./_services/login.service");
var rekap_component_1 = require("./rekapitulasi/rekap.component");
var mhs_service_1 = require("./_services/mhs.service");
var kelas_service_1 = require("./_services/kelas.service");
var isi_component_1 = require("./isi/isi.component");
var edit_component_1 = require("./edit/edit.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            tampilanmhs_component_1.TampilanMhsComponent,
            rekap_component_1.RekapComponent,
            isi_component_1.IsiComponent,
            edit_component_1.EditComponent,
        ],
        providers: [
            login_service_1.LoginService,
            mhs_service_1.MhsService,
            kelas_service_1.KelasService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map