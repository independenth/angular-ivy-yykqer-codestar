import { Component } from '@angular/core';

@Component({
  selector: 'order-panel',
  template: `<h3>Welcome to {{company}}
              <button (click)="show()">Angular</button>
              <br>
              <button (click)="next()">Go</button> 
              <h3>{{current}}
              <br>
              <button (click)="toggle()">{{state}}</button>
              <br>
              <button (click)="love()">Love</button>
              <button (click)="hate()">Hate</button>
              <p *ngFor="let i of data">{{i}}</p>
              <br>
              <button (click)="refresh()">Refresh</button>
              <pre>{{result}}</pre>
              <br>
              <input #task>
              <button (click)="add(task)">Add</button>
              <p *ngFor="let e of list">{{e}}</p>
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
  state = "Yes"
  toggle() {
    var old = this.state
    if (old == "Yes") { this.state = "No"}
    if (old == "No") { this.state = "Yes"}
  }
  data = ["START"]
  love() {
    this.data.push("Love")
  }
  hate() {
    this.data.push("Hate")
  }
  result = "..."
  async refresh() {
    let url = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
    let response = await fetch(url)
    this.result = await response.text()
  }
  list = [ ]
  add(input : any) {
    this.list.push(input.value)
    input.value = ""
  }
}
