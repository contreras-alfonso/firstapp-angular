import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()

  public characterList: Personaje[] = [
    {
      id:crypto.randomUUID(),
      name: 'Trunks',
      poder: 56,
    }
  ]

  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter()


  public deleteCharacter(id:string):void{
    console.log(id)
    this.onDeleteCharacter.emit(id);
  }
}
