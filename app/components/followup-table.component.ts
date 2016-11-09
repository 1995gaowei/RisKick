import { Component, OnInit, Input } from '@angular/core';

import { FollowupService }    from '../services/followup.service'

import { User }                 from '../vo/user'
import { Followup }              from '../vo/followup';

@Component({
    moduleId: module.id,
    selector: 'followup-table',
    templateUrl: '../templates/followup-table.component.html'
})

export class FollowupTableComponent implements OnInit {
    private followups: Followup[];
    newFollowup: Followup;
    addButtonClicked = false;

    constructor(
        private followupService: FollowupService
        ) { }

    ngOnInit(): void {
        this.followups = [];
        this.newFollowup = new Followup('', '', '', '');
    }

    onAddFollowup(): void {
        console.log('add');
    }

    onClickAdd(): void {
        this.addButtonClicked = !this.addButtonClicked;
    }

}