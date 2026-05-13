import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UsersService } from '@e-shop-frontend/users';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
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
        DropdownModule
    ],
    templateUrl: './user-form.component.html',
    styles: ``
})
export class UserFormComponent {
    userForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    ngOnInIt(): void {
        this._initForm();
    }

    private _initForm(): void {
       this.userForm = this.formBuilder.group({
            name: [''],
            email: [''],
            password: [''],
            phone: [''],
            isAdmin: [false],
            street: [''],
            appartment: [''],
            zip: [''],
            city: [''],
            country: [''],

       })
    }
}
