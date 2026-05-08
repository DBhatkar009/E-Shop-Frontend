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

    createProduct(product: FormData): Observable<Product> {
        return this.http.post<Product>('http://localhost:4000/api/v1/products', product);
    }

    getUpdateProduct(productId: string): Observable<Product> {
        return this.http.get<Product>(`http://localhost:4000/api/v1/products/${productId}`);
    }

    updateProduct(product: FormData, productId: string): Observable<Product> {
        return this.http.put<Product>(`http://localhost:4000/api/v1/products/${productId}`, product);
    }

    deleteProduct(productId: string): Observable<object> {
        return this.http.delete<object>(`http://localhost:4000/api/v1/products/${productId}`);
    }
}
