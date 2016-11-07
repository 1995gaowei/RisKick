import { Component, OnInit } from '@angular/core';

import { UserService}        from '../services/user.service'

import { User }              from '../vo/user';

@Component({
    moduleId: module.id,
    selector: 'register-form',
    templateUrl: '../templates/register.component.html',
    styleUrls: ['../styles/register.component.css']
})

export class RegisterComponent implements OnInit {
    private user: User;
    roles = ['developer', 'pm'];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.user = new User('', '', '', this.roles[0]);
    }

    onSignUp() {
        console.log('sign up');
    }

}