import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService:DbzService){

  }

  characters(): Personaje[]{
    return [...this.dbzService.personajes]
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterMain(id)
  }
  onNewCharacter(character: Personaje){
    this.dbzService.onNewCharacter(character)
  }
}
