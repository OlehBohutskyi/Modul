import { Component, OnInit } from '@angular/core';
import { AbstractFigure } from './Classes/AbstractFigure';
import { Cub } from './Classes/Cub';
import { Cylinder } from './Classes/Cylinder';
import { Pyramid } from './Classes/Pyramid';
import { Romb } from './Classes/Romb';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  figure:AbstractFigure[];

  constructor() {}

  ngOnInit(): void {
    
  }

  ras(n:number){
    this.figure = new Array();

    for(let i = 0; i < n; i++){
      this.figure.push(new Pyramid(this.getRandom(), this.getRandom()));
      this.figure.push(new Cub(this.getRandom()));
      this.figure.push(new Cylinder(this.getRandom(), this.getRandom()));
      this.figure.push(new Romb(this.getRandom(), this.getRandom()));
    }
  }

  getRandom(){
    return Math.floor(Math.random()*20 + 1);
  }

}
