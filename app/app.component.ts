import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <child></child>
      
      <directive-app></directive-app>
      <hr>
      <demo-app></demo-app>
      <hr>
      <tlist-demo></tlist-demo>
      <dynamic-component-demo></dynamic-component-demo>
      <runtime-content-demo></runtime-content-demo>
      <br>
  `,
})
export class AppComponent { 
  @HostListener('customEvent') 
  test() {
    alert(1)
  }
}