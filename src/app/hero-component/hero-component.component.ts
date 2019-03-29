import { Component, OnInit } from '@angular/core';
import { IHero } from '../models/hero';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {

  public hero: IHero;
  public heroList: Array<IHero> = [];

  constructor() { 
    this.hero = {
      id: 1,
      name: "First name"
    }

    this.addHero();
  }

  ngOnInit() {
  }

  addHero(){
    const {name, id} = this.hero;
    this.heroList.push({name, id});
    this.hero.name = '';
    this.hero.id++;
    console.log(this.heroList);
  }


}
