import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { NgContentAndContentChildDemoComponent } from './ng-content-and-content-child-demo/ng-content-and-content-child-demo.component';
import { DataBindigDemoComponent } from './data-bindig-demo/data-bindig-demo.component';
import { EventBindigDemoComponent } from './event-bindig-demo/event-bindig-demo.component';
import { AttributeDirectiveDemoDirective } from './attribute-directive-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputDemoComponent,
    OutputDemoComponent,
    ViewChildDemoComponent,
    NgContentAndContentChildDemoComponent,
    DataBindigDemoComponent,
    EventBindigDemoComponent,
    AttributeDirectiveDemoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
