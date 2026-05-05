import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product, ProductsService } from '@e-shop-frontend/products';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'admin-product-list',
    standalone: true,
    imports: [CardModule, ToolbarModule, ButtonModule, TableModule, RouterLink, ToastModule, ConfirmDialogModule, CommonModule],
    templateUrl: './product-list.component.html',
    styles: ``
})
export class ProductListComponent {
    products: Product[] = [];

    constructor(
        private productsService: ProductsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void {
        this.getProducts();
    }

    deleteProduct(productId: string): void {
        this.confirmationService.confirm({
            // target: e.target as EventTarget,
            message: 'Are you sure that you want to delete this product?',
            header: 'Delete Product',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            rejectIcon: 'none',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => {
                this.productsService.deleteProduct(productId).subscribe({
                    next: (response) => {
                        this.getProducts();
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product deleted successfully!' });
                        console.log(response);
                    },
                    error: (error) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete product!' });
                        console.log(error);
                    }
                });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    private getProducts() {
        this.productsService.getProducts().subscribe((prod) => {
            this.products = prod;
        });
    }
}
