import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductsService } from 'products/src/lib/services/products.service';
import { CategoriesService } from 'products/src/lib/services/categories.service';

@Component({
    selector: 'admin-product-form',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        InputNumberModule,
        InputTextareaModule,
        InputSwitchModule,
        DropdownModule,
        EditorModule
    ],
    templateUrl: './product-form.component.html',
    styles: ``
})
export class ProductFormComponent {
    productForm!: FormGroup;
    isSubmitted = false;
    editMode = false;
    category: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private productsService: ProductsService,
        private messageService: MessageService,
        private categoriesService: CategoriesService // private location: Location
    ) {}

    ngOnInit(): void {
        this._initForm();
        this._getCategories();
    }

    private _initForm() {
        this.productForm = this.formBuilder.group({
            name: ['', Validators.required],
            brand: ['', Validators.required],
            price: ['', Validators.required],
            categorie: ['', Validators.required],
            countInStock: ['', Validators.required],
            description: ['', Validators.required],
            richDescription: [''],
            image: [''],
            isFeatured: ['']
        });
    }

    private _getCategories() {
        this.categoriesService.getCategories().subscribe((categories) => {
            this.category = categories;
        });
    }

    onSubmit() {}

    onCancel() {}

    get productFormControls() {
        return this.productForm.controls;
    }
}
