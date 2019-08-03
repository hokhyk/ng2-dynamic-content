import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import './globals';

import { AppComponent } from './app.component';

import { TListComponent } from './tlist.component';
import { TListComponentDemo } from './tlist.component.demo';

import { 
    DynamicContentComponent, 
    DynamicSample1Component, 
    DynamicSample2Component, 
    UnknownDynamicComponent 
} from './dynamic-content.component';
import { DynamicContentComponentDemo } from './dynamic-content.component.demo';

import { RuntimeContentComponent } from './runtime-content.component';
import { RuntimeContentComponentDemo } from './runtime-content.component.demo';


import {  MainComponent, TodoAppComponent, TodoItemComponent, TodoInputComponent, FooterComponent, TodoList } from './todolist.component';

import { DirectiveComponent, AComponent, AppComponentContainer} from './directive-instead-viewchild.component';

import { Child } from './directive-instead-viewchild.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        
        TListComponent, 
        TListComponentDemo,

        DynamicContentComponent, 
        DynamicSample1Component, 
        DynamicSample2Component, 
        UnknownDynamicComponent,
        DynamicContentComponentDemo,

        RuntimeContentComponent,
        RuntimeContentComponentDemo,

        MainComponent,
        TodoItemComponent,
        TodoInputComponent,
        TodoAppComponent,
        FooterComponent,

        DirectiveComponent, 
        AComponent, 
        AppComponentContainer,

        Child
    ],
    providers: [
        TodoList
    ],
    entryComponents: [
        DynamicSample1Component, 
        DynamicSample2Component, 
        UnknownDynamicComponent,

        AComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }