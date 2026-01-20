import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
    selector: 'e-shop-frontend-ui',
    standalone: true,
    imports: [CommonModule, BannerComponent, SliderComponent],
    templateUrl: './ui.component.html',
    styleUrl: './ui.component.css'
})
export class UiComponent {}
