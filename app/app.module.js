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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
// import { SignIn }                 from './sign-in';
var user_service_1 = require('./services/user.service');
var project_service_1 = require('./services/project.service');
var risk_service_1 = require('./services/risk.service');
var followup_service_1 = require('./services/followup.service');
var app_component_1 = require('./components/app.component');
var login_component_1 = require('./components/login.component');
var register_component_1 = require('./components/register.component');
var home_component_1 = require('./components/home.component');
var project_table_component_1 = require('./components/project-table.component');
var risk_table_component_1 = require('./components/risk-table.component');
var followup_table_component_1 = require('./components/followup-table.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                // InMemoryWebApiModule.forRoot(SignIn)
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                project_table_component_1.ProjectTableComponent,
                risk_table_component_1.RiskTableComponent,
                followup_table_component_1.FollowupTableComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService, project_service_1.ProjectService, risk_service_1.RiskService, followup_service_1.FollowupService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map