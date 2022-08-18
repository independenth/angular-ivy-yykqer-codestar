import { Component } from '@angular/core';

@Component({
  selector: 'order-panel',
  template: `<h3>Welcome to {{company}}
              <button (click)="show()">Angular</button>
              <br>
              <button (click)="next()">Go</button> 
              <h3>{{current}}
            `,
})
export class OrderPanel {
  current = 0
  next() {
    this.current++
  }
  company = 'iCoffee';
  show() {
    alert("I Love You")
  }
}
