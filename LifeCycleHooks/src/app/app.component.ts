import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked{
  title = 'LifeCycleHooks';
  msg: string= ''
  constructor(){
    console.log("App Constructor Called....")
  }

  onClick(el: HTMLInputElement){
    this.msg = el.value
  }

  ngAfterViewInit(): void {
    console.log("App Component's AfterViewInit Hook Called....")
  }
ngAfterViewChecked(): void {
  console.log("App Component's ngAfterViewChecked Hook Called....")
}
}
