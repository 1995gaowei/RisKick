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
var followup_service_1 = require('../services/followup.service');
var followup_1 = require('../vo/followup');
var FollowupTableComponent = (function () {
    function FollowupTableComponent(followupService) {
        this.followupService = followupService;
        this.addButtonClicked = false;
    }
    FollowupTableComponent.prototype.ngOnInit = function () {
        this.followups = [];
        this.newFollowup = new followup_1.Followup('', '', '', '');
    };
    FollowupTableComponent.prototype.onAddFollowup = function () {
        console.log('add');
    };
    FollowupTableComponent.prototype.onClickAdd = function () {
        this.addButtonClicked = !this.addButtonClicked;
    };
    FollowupTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'followup-table',
            templateUrl: '../templates/followup-table.component.html'
        }), 
        __metadata('design:paramtypes', [followup_service_1.FollowupService])
    ], FollowupTableComponent);
    return FollowupTableComponent;
}());
exports.FollowupTableComponent = FollowupTableComponent;
//# sourceMappingURL=followup-table.component.js.map