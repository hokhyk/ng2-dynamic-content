import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
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
export class AppComponent { }