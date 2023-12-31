import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public personajes: Personaje[] = [
    {
      id:crypto.randomUUID(),
      name: 'krillin',
      poder: 56,
    },
    {
      id:crypto.randomUUID(),
      name: 'Goku',
      poder: 1500,
    },
    {
      id:crypto.randomUUID(),
      name: 'Vegeta',
      poder: 7500,
    }
  ];

  public onNewCharacter( character: Personaje):void{
    console.log(character)
    this.personajes.push(character)
  }

  public onDeleteCharacterMain(idPersonaje:string):void{
    console.log(idPersonaje)
    this.personajes = this.personajes.filter(e=>e.id !== idPersonaje)
  }


}
