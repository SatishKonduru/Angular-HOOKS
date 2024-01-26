import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { OnInitComponent } from './components/on-init/on-init.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { AfterContentInitComponent } from './components/after-content-init/after-content-init.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    OnChangesComponent,
    OnInitComponent,
    DoCheckComponent,
    AfterContentInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
