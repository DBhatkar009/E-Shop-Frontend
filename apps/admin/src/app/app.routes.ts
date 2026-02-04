import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';

export const appRoutes: Route[] = [{
    path: '',
    component: ShellComponent,
    children: [{
        path: 'dashboard',
        component: DashboardComponent
    },
    {
    path: 'categories',
    component: CategoriesComponent
    },
{
    path: 'categories/category-form',
    component: CategoriesFormComponent
}]
},
];
