import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <demo-app></demo-app>
      <hr>
      <tlist-demo></tlist-demo>
      <dynamic-component-demo></dynamic-component-demo>
      <runtime-content-demo></runtime-content-demo>
      <br>
  `,
})
export class AppComponent { }