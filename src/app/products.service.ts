import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'https://localhost:44376/api/product';

  constructor(private http: HttpClient, private router: Router) {}

    addProduct(ProductName, ProductDescription, ProductPrice) {
      const obj = {
        ProductName,
        ProductDescription,
        ProductPrice
      };
      console.log(obj);
      this.http.post(`${this.uri}`, obj)
        .subscribe(res => this.router.navigate(['products']));
    }

    getProducts() {
      return this.http.get(`${this.uri}`);
    }

    editProduct(id){
      return this.http.get(`${this.uri}/${id}`);
    }

    updateProduct(ProductName, ProductDescription, ProductPrice, id, ProductId) {
      const Id = ProductId;
      const obj = {
        ProductName,
        ProductDescription,
        ProductPrice,
        Id
      };
      console.log(obj);
      this.http.put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
    }

    deleteProduct(id){
      return this.http.delete(`${this.uri}/${id}`);
    }
   }

