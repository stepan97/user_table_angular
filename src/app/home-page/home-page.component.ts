import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data: Array<object> = null;
  hopar: number = Math.floor(Math.random() * 10);

  constructor() { 
  }

  ngOnInit() {
    this.getDataFromServer();
  }

  getDataFromServer(){
    fetch('http://localhost:3000/users')
      .then(async (response) => {
        const data = await response.json();
        if(response.status === 200 && data){
          this.data = data;
        }else {
          console.log("Could not get data from server...") ;
        }
      });
  }
}
