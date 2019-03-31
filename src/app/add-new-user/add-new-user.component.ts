import { Component, OnInit } from '@angular/core';
import { User, HumanTypes } from './../models/user';
import { UserService } from './../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  // gender: HumanTypes;
  genders: string[] = ['male', 'female'];
  user: User;

  constructor(private router: Router, private service: UserService) {    
    // TODO: what to do about this id field ? (see onSubmitBtnClicked for details about issue)
    this.user = {
      id: -1,
      balance: 0,
      age: 0,
      name: '',
      gender: '',
      company: '',
      email: ''
    };
  }

  ngOnInit() {
  }

  onSubmitBtnClicked(){
    this.service.postUser({
      balance: this.user.balance,
      age: this.user.age,
      name: this.user.name,
      gender: this.user.gender,
      company: this.user.company,
      email: this.user.email
    })
      .subscribe(response => {
        alert(`New user with name '${this.user.name}' created !!`);
        this.onBackBtnPressed();
      });
  }

  onBackBtnPressed(){
    this.router.navigate(['/users']);
  }
}
