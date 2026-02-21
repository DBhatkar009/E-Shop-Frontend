import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'e-shop-frontend-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'admin';
}
