import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nif      : string;
  password : string;

  constructor(private userService : UserService) { 
  }

  ngOnInit() {
  }
  login(){
    let user = {nif: this.nif, password: this.password}
    
    this.userService.login(user).subscribe((data) => {
     console.log(data);
    });
  }
}
