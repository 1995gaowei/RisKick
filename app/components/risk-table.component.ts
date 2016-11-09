import { Component, OnInit, Input } from '@angular/core';

import { RiskService }    from '../services/risk.service'

import { User }                 from '../vo/user'
import { Risk }              from '../vo/risk';

@Component({
    moduleId: module.id,
    selector: 'risk-table',
    templateUrl: '../templates/risk-table.component.html'
})

export class RiskTableComponent implements OnInit {
    private risks: Risk[];
    newRisk: Risk;
    addButtonClicked = false;

    riskType: string[];
    riskImpact: string[];
    riskPossibility: string[];

    constructor(
        private riskService: RiskService
        ) { }

    ngOnInit(): void {
        this.risks = [];
        this.newRisk = new Risk('', '', '', '', '', '', '', '', '');

        this.riskType = this.riskService.getRiskType();
        this.riskImpact = this.riskService.getRiskImapct();
        this.riskPossibility = this.riskService.getRiskPossibility();
    }

    onAddRisk(): void {
        console.log('add');
    }

    onClickAdd(): void {
        this.addButtonClicked = !this.addButtonClicked;
    }

}