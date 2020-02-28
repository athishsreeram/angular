import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countercomponent',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  @Output() counterChange: EventEmitter<number>;
  constructor() {
    this.counterChange = new EventEmitter();
  }
  
  @Input()
  public counter() {
    return this.count;
  }

  ngOnInit() {
  }

  public increment() {
    this.count++;
    this.counterChange.emit(this.count);
  }

  public decrement() {
    this.count--;
    this.counterChange.emit(this.count);
  }

}
