import { Component, OnInit } from '@angular/core';

import '../rxjs-operators';

import { UserService}        from '../services/user.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../templates/app.component.html'
})

export class AppComponent implements OnInit { 

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

}
