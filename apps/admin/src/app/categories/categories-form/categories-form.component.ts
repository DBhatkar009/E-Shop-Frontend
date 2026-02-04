import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'admin-categories-form',
  standalone: true,
  imports: [CardModule, ToolbarModule, ButtonModule, InputTextModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categories-form.component.html',
  styles: ``
})
export class CategoriesFormComponent {
  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
 this.categoryForm = this.formBuilder.group({
      name: [''],
      icon: ['']
    });
  }

}
