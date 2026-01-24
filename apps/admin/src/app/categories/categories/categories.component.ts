import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'admin-categories',
  standalone: true,
  imports: [CardModule, ToolbarModule, ButtonModule, TableModule],
  templateUrl: './categories.component.html',
  styles: ``
})
export class CategoriesComponent {
  categories = [
    { id: 1, name: 'Dell inspiron 14 Laptop', icon: 'pi pi-laptop'},
        { id: 2, name: 'Dell inspiron 15 Laptop', icon: 'pi pi-laptop'},
            { id: 3, name: 'Dell inspiron 16 Laptop', icon: 'pi pi-laptop'},
                { id: 4, name: 'Dell inspiron 17 Laptop', icon: 'pi pi-laptop'}
  ]
}
