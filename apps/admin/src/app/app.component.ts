import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@Component({
    standalone: true,
    imports: [ RouterModule, DashboardComponent],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'e-shop-frontend-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'admin';
}
