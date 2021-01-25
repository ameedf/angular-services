import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addUser(name: string, role:string) {
    this.users.push({name: name, role: role});
  }
}

interface User {
  name: string;
  role: string;
}
