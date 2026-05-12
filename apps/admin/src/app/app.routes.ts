import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { UserListComponent } from './users/user-list/user-list.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
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
            },
            {
                path: 'categories/update/:id',
                component: CategoriesFormComponent
            },
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path: 'products/product-form',
                component: ProductFormComponent
            },
            {
                path: 'products/update/:id',
                component: ProductFormComponent
            },
            {
                path: 'users',
                component: UserListComponent
            }
        ]
    }
];
