import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  public changeName():void{
    this.name = 'Superman'
  }

  public changeAge():void{
    this.age = 20
  }

  public resetForm():void{
    this.name = 'IronMan'
    this.age = 45
  }

}
