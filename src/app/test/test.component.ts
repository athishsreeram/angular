import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  
     <input [(ngModel)]="name" />
     <div>Value you typed : {{name}}</div>
     {{siteUrl}}
     <div><input [disabled]="isDisabled" type="text" value="te"/></div> 
     <div [ngClass]="testClass">test</div>

     <input #myid value="gforce" />
     <input type="button" value="ttes" (click)="hello(myid.value)"/>
     `,
  styles: [`
    .text-success{
      color: green
    }
    .text-fail{
      color: red
    }
  `]
})
export class TestComponent implements OnInit {

  public siteUrl = window.location.href;
  public isDisabled = false;
  public name = '';
  constructor() { }

  public testClass = {
    "text-success" : !this.isDisabled,
    "text-fail": this.isDisabled
  }

  ngOnInit() {
  }

  hello(val){
    console.log(val);
  }

}
