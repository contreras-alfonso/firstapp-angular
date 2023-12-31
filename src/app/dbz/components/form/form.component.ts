import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-add',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output()
  public onNewCharacter : EventEmitter<Personaje> = new EventEmitter()

  public character: Personaje = {
    name: '',
    poder: 0,
  }

  public emitCharacter():void{

    if(this.character.name === '') return

    const newCharacter = {id:crypto.randomUUID(),...this.character}

    this.onNewCharacter.emit(newCharacter)

    this.character.name = '';
    this.character.poder = 0;
  }
}
