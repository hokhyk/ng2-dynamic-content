import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <tlist-demo></tlist-demo>
      <dynamic-component-demo></dynamic-component-demo>
      <runtime-content-demo></runtime-content-demo>
      <br>
      <demo-app></demo-app>
  `,
})
export class AppComponent { }