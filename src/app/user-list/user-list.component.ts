import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../model/user'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['name', 'surname1','surname2', 'nif'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(userList => this.users = userList);
  }

}
