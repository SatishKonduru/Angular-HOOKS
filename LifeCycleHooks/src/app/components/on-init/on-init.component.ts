import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnChanges, OnInit{
  @Input() message : string[];
  @ViewChild('messageRef') messageEl : ElementRef
ngOnChanges(changes: SimpleChanges): void {
  console.log("OnChanges hook Called...")
}

ngOnInit(): void {
  console.log("ngOnInit hook Called...")
  // console.log("Message element using ViewChild: ", this.messageEl.nativeElement.innerHTML)
}


}
