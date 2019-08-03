//our root app component
import {Component, NgModule, Inject, Directive, ViewContainerRef, ComponentFactoryResolver, ViewChild, VERSION, Input, Output, HostListener, EventEmitter, HostBinding } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Directive({
  selector: '[app-component-container]',
})

export class AppComponentContainer {
  constructor( private vc: ViewContainerRef, @Inject('app-component-service') shared: any) {
    shared.registerContainer(vc);
  }
}


@Component({
  selector: 'a-comp',
  template: `
      <span>I am A component</span>
      <div><button (click)="onClick()">Click to destroy component container</button></div>
  `,
})
export class AComponent {
    // @Output() myClick = new EventEmitter<ViewContainerRef>();

    constructor( private vc: ViewContainerRef) {
    }

    // @HostBinding('vc') vc; 

    onClick() {
        console.log(this.vc);
        this.vc.remove();
    //   console.log(this.vc, targetElement);
    //   this.myClick.emit(this.vc);
    }
}

//A simple pub-sub service
const shared = {
  createListeners: <any>[],
  destroyListeners: <any>[],
  onContainerCreated(fn: any) {
    this.createListeners.push(fn);
  },
  onContainerDestroyed(fn:any) {
    this.destroyListeners.push(fn);
  },
  registerContainer(container: ViewContainerRef) {
    this.createListeners.forEach((fn: any) => {
      fn(container);
    })
  },
  destroyContainer(container: ViewContainerRef) {
    this.destroyListeners.forEach((fn:any) => {
      fn(container);
    })
  }
}


@Component({
  selector: 'directive-app',
  providers: [
    {
      provide: 'app-component-service',
      useValue: shared
    }
  ],
  template: `
      <h1>I am parent App component</h1>
      <div class="insert-a-component-inside">
          <ng-container app-component-container></ng-container>
      </div>
  `,
})
export class DirectiveComponent {
  vc: ViewContainerRef;

  constructor(private r: ComponentFactoryResolver, @Inject('app-component-service') shared: any) {
      console.log(shared);
    shared.onContainerCreated((container: ViewContainerRef) => {
      this.vc = container;
      const factory = this.r.resolveComponentFactory(AComponent);
      this.vc.createComponent(factory);
    });

    shared.onContainerDestroyed(() => {
      this.vc = undefined;
    })
  }

  destroyContainer(vc: ViewContainerRef){
      shared.destroyContainer(vc);
  }
}
