import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { CategoriesService } from 'products/src/lib/services/categories.service';
import { Category } from 'products/src/lib/models/category';
import { ToastModule } from 'primeng/toast';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'admin-categories-form',
    standalone: true,
    imports: [CommonModule, CardModule, ToolbarModule, ButtonModule, InputTextModule, FormsModule, ReactiveFormsModule, ToastModule],
    templateUrl: './categories-form.component.html',
    styles: ``
})
export class CategoriesFormComponent {
    categoryForm!: FormGroup;
    isSubmitted = false;
    editMode = false;
    currentCategoryId!: string;

    constructor(
        private formBuilder: FormBuilder,
        private categoriesService: CategoriesService,
        private messageService: MessageService,
        private location: Location,
        private route: ActivatedRoute
    ) {}

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void {
        this.categoryForm = this.formBuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required]
        });
        this.editCategory();
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.categoryForm.invalid) {
            return;
        }
        const category: Category = {
            id: this.currentCategoryId,
            name: this.categoryFormControls['name'].value,
            icon: this.categoryFormControls['icon'].value
        };

        if (this.editMode) {
            this.updateCategoryForm(category);
        } else {
            this.addCategoryForm(category);
        }
    }

    private updateCategoryForm(category: Category) {
        this.categoriesService.updateCategories(category).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category updated successfully!' });
                timer(1000)
                    .toPromise()
                    .then(() => {
                        this.location.back();
                    });
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update category!' });
                console.error('Error updating category:', error);
            }
        });
    }

    private addCategoryForm(category: Category) {
        this.categoriesService.createCategories(category).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category created successfully!' });
                timer(1000)
                    .toPromise()
                    .then(() => {
                        this.location.back();
                    });
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create category!' });
                console.error('Error creating category:', error);
            }
        });
    }

    private editCategory() {
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.editMode = true;
                this.currentCategoryId = params['id'];
                this.categoriesService.getUpdateCategory(params['id']).subscribe((category) => {
                    this.categoryFormControls['name'].setValue(category.name);
                    this.categoryFormControls['icon'].setValue(category.icon);
                });
            }
        });
    }

    get categoryFormControls() {
        return this.categoryForm.controls;
    }
}
