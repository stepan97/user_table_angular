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

  constructor(private service: UserService) {}

  ngOnInit() {
    this.columns = this.service.getColumns();
    this.service.getUsers().subscribe(users => this.users = users);
  }

  onRemoveBtnClicked(id){
    this.service.removeUser(id).subscribe(response => {      
      // get index of deleted row and remove it from table view
      let index = this.users.findIndex(user => user.id === id);
      if(!index) return console.log("Could not find index..");

      alert(`User ${this.users[index].name} deleted.`);

      this.users.splice(index, 1);
    });
  }

}
