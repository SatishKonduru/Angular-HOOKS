import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.css']
})
export class AfterContentInitComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy{
@ContentChild('projRef') projectedData : ElementRef;
ngOnChanges(){
  console.log("ngOnChanges hook is called")
}
ngOnInit(): void {
  console.log("ngOnInit hook is called")
}
ngDoCheck(){
  console.log("DoCheck hook is called")
  // console.log("In DoCheck Hook: ProjectedData: ", this.projectedData)
}



ngAfterContentInit(): void {
  console.log("ngAfterContentInit hook is called....")
  // console.log("in ngAfterContentInit hook: ProjectedData: ", this.projectedData.nativeElement.innerHTML)
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked hook is called....")
}

ngOnDestroy(): void {
  console.log("ngOnDestroy hook is called....")
  
}
}
