import { Component, OnInit } from '@angular/core';

import '../rxjs-operators';

import { UserService }        from '../services/user.service';
import { User }               from '../vo/user';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css']
})

export class AppComponent implements OnInit { 
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User('wei', '', '', '');
  }

}
