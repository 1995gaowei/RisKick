import { Component, OnInit } from '@angular/core';

import { UserService }        from '../services/user.service'
import { SoftwareService }    from '../services/software.service'

import { User }              from '../vo/user';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: '../templates/home.component.html',
    styleUrls: ['../styles/home.component.css']
})

export class HomeComponent implements OnInit {
    private user: User;

    constructor(
        private userService: UserService,
        private softwareService: SoftwareService
        ) { }

    ngOnInit(): void {
        this.user = new User('', '');
    }

}