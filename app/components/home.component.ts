import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { UserService }        from '../services/user.service'

import { User }              from '../vo/user';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: '../templates/home.component.html',
    styleUrls: ['../styles/home.component.css']
})

export class HomeComponent implements OnInit {
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
        ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            console.log(params);
        });
    }

}