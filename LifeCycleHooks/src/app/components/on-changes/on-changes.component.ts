import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges{

@Input()  message: any ;
constructor(){
  console.log("OnChanges Constructor Called...")
}

ngOnChanges(changes: SimpleChanges): void {
  console.log("OnChanges hooks called in OnChanges component: ")
  console.log("Changes: ", changes)
}

}
