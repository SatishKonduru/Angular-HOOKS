import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements OnChanges, OnInit, DoCheck{
  @Input() message;
constructor(){
  console.log("Constructor called.....")
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges called.....")
}
ngOnInit(): void {
  console.log("ngOnInit called.....")
}

ngDoCheck(): void {
  console.log("ngDoCheck called.....")
}


}
