import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';


@Component({
    standalone: true,
    imports: [ RouterModule, DashboardComponent, ShellComponent],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'e-shop-frontend-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'admin';
}
