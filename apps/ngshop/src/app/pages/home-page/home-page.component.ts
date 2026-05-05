import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';



@Component({
    selector: 'ngshop-home-page',
    standalone: true,
    imports: [ AccordionModule, CommonModule],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {}
