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
var RISK_TYPE = ['Management Risk', 'Quality Risk', 'Technical Risk', 'Legal Risk', 'Business Risk'];
var RISK_IMPACT = ['High', 'Medium', 'Low'];
var RISK_POSSIBILITY = ['High', 'Medium', 'Low'];
var RiskService = (function () {
    function RiskService(http) {
        this.http = http;
    }
    RiskService.prototype.getRiskType = function () {
        return RISK_TYPE;
    };
    RiskService.prototype.getRiskImapct = function () {
        return RISK_IMPACT;
    };
    RiskService.prototype.getRiskPossibility = function () {
        return RISK_POSSIBILITY;
    };
    RiskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RiskService);
    return RiskService;
}());
exports.RiskService = RiskService;
//# sourceMappingURL=risk.service.js.map