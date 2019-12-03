import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AonWebElementWipComponent } from './aon-web-element-wip/aon-web-element-wip.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [AonWebElementWipComponent,],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AonWebElementWipComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(AonWebElementWipComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name [HTML Tag]
    customElements.define('web-element', el);
  }
}
