import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`http://localhost:4000/api/v1/products`);
    }

    deleteProduct(productId: string): Observable<object> {
        return this.http.delete<object>(`http://localhost:4000/api/v1/products/${productId}`);
    }
}
