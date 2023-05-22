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
    this.userService.login(this.nif, this.password).subscribe((data) => {
     console.log(data);
    });
  }
}
