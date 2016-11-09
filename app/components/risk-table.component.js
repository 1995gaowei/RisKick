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
var risk_service_1 = require('../services/risk.service');
var risk_1 = require('../vo/risk');
var RiskTableComponent = (function () {
    function RiskTableComponent(riskService) {
        this.riskService = riskService;
        this.addButtonClicked = false;
    }
    RiskTableComponent.prototype.ngOnInit = function () {
        this.risks = [];
        this.newRisk = new risk_1.Risk('', '', '', '', '', '', '', '', '');
        this.riskType = this.riskService.getRiskType();
        this.riskImpact = this.riskService.getRiskImapct();
        this.riskPossibility = this.riskService.getRiskPossibility();
    };
    RiskTableComponent.prototype.onAddRisk = function () {
        console.log('add');
    };
    RiskTableComponent.prototype.onClickAdd = function () {
        this.addButtonClicked = !this.addButtonClicked;
    };
    RiskTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'risk-table',
            templateUrl: '../templates/risk-table.component.html'
        }), 
        __metadata('design:paramtypes', [risk_service_1.RiskService])
    ], RiskTableComponent);
    return RiskTableComponent;
}());
exports.RiskTableComponent = RiskTableComponent;
//# sourceMappingURL=risk-table.component.js.map