import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nif      : string;
  password : string;

  constructor() { }

  ngOnInit() {
  }
  login(){
    let user = new User();
    user = {...user, nif: this.nif, password: this.password}
    
    this.userService.login(user).subscribe((data) => {
     console.log(data);
    });
  }
}
