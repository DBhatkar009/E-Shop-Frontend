import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  standalone: true,
  imports: [RouterModule, HomePageComponent, ProductListComponent, FooterComponent, HeaderComponent],
  selector: 'e-shop-frontend-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngshop';
}
