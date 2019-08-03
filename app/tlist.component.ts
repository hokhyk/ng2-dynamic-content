import { Component, Input, ContentChild, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tlist',
    template: `
        <ul>
            <ng-template ngFor [ngForOf]="items" let-item="$implicit" let-i="index" [ngForTemplate]="template">
                    <li>[{{i}}] Hello: {{item.title}} kkk</li>
            </ng-template>
        </ul>
    `
})
export class TListComponent {

    @ContentChild(TemplateRef)
    // @ViewChild(TemplateRef)

    template: TemplateRef<any>;

    // @ViewChild(TemplateRef)

    // template1: TemplateRef<any>;

    @Input()
    items: any[] = [];

}
