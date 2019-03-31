import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: User[] = [];
  columns: string[] = [];

  constructor(service: UserService) {
    this.columns = service.getColumns();
    service.getUsers().subscribe(response => {
      this.users = response.json();
    });
   }

  ngOnInit() {
    
  }

}
