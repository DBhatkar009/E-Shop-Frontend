import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CategoriesService, Product, ProductsService } from '@e-shop-frontend/products';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { timer } from 'rxjs';

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
        EditorModule,
        FileUploadModule
    ],
    templateUrl: './product-form.component.html',
    styles: ``
})
export class ProductFormComponent {
    productForm!: FormGroup;
    isSubmitted = false;
    editMode = false;
    category: any[] = [];
    imageUpload: string | ArrayBuffer | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private productsService: ProductsService,
        private messageService: MessageService,
        private categoriesService: CategoriesService,
        private location: Location
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
            isFeatured: [false]
        });
    }

    private _getCategories() {
        this.categoriesService.getCategories().subscribe((categories) => {
            this.category = categories;
        });
    }

    onImageUpload(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.productForm.patchValue({ image: file });
            this.productForm.get('image')?.updateValueAndValidity();
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.imageUpload = fileReader.result ?? undefined;
            };
            fileReader.readAsDataURL(file);
        }
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.productForm.invalid) return;

        const productFormData = new FormData();

        Object.keys(this.productFormControls).map((key) => {
            console.log(key);
            console.log(this.productFormControls[key].value);
            productFormData.append(key, this.productFormControls[key].value);
        });
        this.addProduct(productFormData);
    }

    private addProduct(product: FormData) {
        this.productsService.createProduct(product).subscribe({
            next: (product: Product) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: `${product.name} created successfully!` });
                timer(1000)
                    .toPromise()
                    .then(() => {
                        this.location.back();
                    });
                console.log(product);
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create product!' });
                console.error('Error creating product:', error);
            }
        });
    }

    onCancel() {
        this.location.back();
    }

    get productFormControls() {
        return this.productForm.controls;
    }
}
