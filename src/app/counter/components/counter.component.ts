import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

<div class="flex gap-3 mt-3">
  <button
    class="bg-emerald-500 rounded-lg text-white py-1 px-5"
    (click)="increaseBy(1)"
  >
    +1
  </button>
  <button
    class="bg-red-500 rounded-lg text-white py-1 px-5"
    (click)="resetCounter()"
  >
    Reset
  </button>
  <button
    class="border-2 border-emerald-500 rounded-lg text-black py-1 px-5 hover:bg-emerald-500 hover:text-white"
    (click)="decreaseBy(1)"
  >
    -1
  </button>
</div>
  `
})

export class CounterComponent {
  public counter:number = 10;
  public increaseBy(value:number):void{
    this.counter += value
  }
  public decreaseBy(value:number):void{
    this.counter -= value;
  }
  public resetCounter():void{
    this.counter = 10;
  }
}
