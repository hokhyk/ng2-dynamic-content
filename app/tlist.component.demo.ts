import { Component } from '@angular/core';

@Component({
    selector: 'tlist-demo',
    template: `
        <div>
            <h2>Templated list</h2>
            <tlist [items]="items">
            <h1>here is not queried by @contentChild</h1>
                // <ng-template let-item="$implicit" let-i="index">
                //     <li>[{{i}}] Hello: {{item.title}}</li>
                <h5>here is queried by @contentChild</h5>
                // </ng-template>
            </tlist>
        </div>
    `
})
export class TListComponentDemo {
    items: any[] = [
        { title: 'list Item 1' },
        { title: 'list Item 2' },
        { title: 'list Item 3' }
    ];
}
