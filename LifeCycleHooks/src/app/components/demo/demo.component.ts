import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
public name = "RSK"
@Input()  message : any;
constructor(){
  console.log("Demo Constructor Called...")
  console.log("Message value in Demo constructor: ", this.message)
}


}
