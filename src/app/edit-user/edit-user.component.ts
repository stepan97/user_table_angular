import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {  
  genders: string[] = ['male', 'female'];
  user: User;

  constructor(private route: ActivatedRoute, private service: UserService, private router: Router) { 
    this.user = {
      id: -1,
      balance: 0,
      age: 0,
      name: "",
      gender: "",
      company: "",
      email: ""
    }
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get("id");
        if(id){
          this.service.getUserById(id)
          .subscribe(user => this.user = user);
        }
      });
  }

  onSubmit(){
    this.service.updateUser(this.user.id, this.user)
      .subscribe(user => {
        alert(`User ${this.user.name} updated!!!`);
        this.onBackBtnPressed();
      });
  }

  onBackBtnPressed(){
    this.router.navigate(['/users']);
  }

}
