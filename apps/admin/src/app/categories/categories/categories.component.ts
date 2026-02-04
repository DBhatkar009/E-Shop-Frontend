import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CategoriesService } from 'products/src/lib/services/categories.service';
import { Category } from 'products/src/lib/models/category';

@Component({
  selector: 'admin-categories',
  standalone: true,
  imports: [CardModule, ToolbarModule, ButtonModule, TableModule],
  templateUrl: './categories.component.html',
  styles: ``
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(cats => {
      this.categories = cats;
    })
  }

}