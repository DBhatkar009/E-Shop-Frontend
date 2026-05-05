import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { CategoriesService, Category } from '@e-shop-frontend/products';

@Component({
    selector: 'admin-categories',
    standalone: true,
    imports: [CardModule, ToolbarModule, ButtonModule, TableModule, RouterLink, ToastModule, ConfirmDialogModule, CommonModule],
    templateUrl: './categories.component.html',
    styles: ``
})
export class CategoriesComponent {
    categories: Category[] = [];

    constructor(
        private categoriesService: CategoriesService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void {
        this.getCategory();
    }

    updateCategory(categoryId: string): void {
        this.router.navigateByUrl(`/categories/update/${categoryId}`);
    }

    deleteCategory(categoryId: string): void {
        this.confirmationService.confirm({
            // target: e.target as EventTarget,
            message: 'Are you sure that you want to delete this category?',
            header: 'Delete Category',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            rejectIcon: 'none',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => {
                this.categoriesService.deleteCategory(categoryId).subscribe({
                    next: (response) => {
                        this.getCategory();
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category deleted successfully!' });
                        console.log(response);
                    },
                    error: (error) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete category!' });
                        console.log(error);
                    }
                });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    private getCategory() {
        this.categoriesService.getCategories().subscribe((cats) => {
            this.categories = cats;
            console.log(cats);
        });
    }
}
