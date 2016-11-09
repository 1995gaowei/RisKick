import { Component, OnInit } from '@angular/core';

import { UserService}        from '../services/user.service'

import { User }              from '../vo/user';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: '../templates/login.component.html',
    styleUrls: ['../styles/login.component.css']
})

export class LoginComponent implements OnInit {
    private user: User;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.user = new User('', '', '', '');
    }

    onSignIn() {
        console.log('sign in');
        this.userService.signIn(this.user).subscribe(
            user => console.log(user),
            error => console.log(error)
        );
        console.log(this.userService.getCurrentUser());
    }

}