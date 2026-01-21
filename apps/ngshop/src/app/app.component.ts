import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { BannerComponent } from 'ui/src/lib/banner/banner.component';
import { SliderComponent } from 'ui/src/lib/slider/slider.component';

@Component({
  standalone: true,
  imports: [RouterModule, HomePageComponent, ProductListComponent, FooterComponent, HeaderComponent, BannerComponent, SliderComponent],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'e-shop-frontend-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngshop';
}
