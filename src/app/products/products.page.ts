import { Component, OnInit } from '@angular/core';
import { Product, products} from '../products';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    //call the method to be displayed
    this.displayProducts();
  }

  displayProducts() {
    this.productService.getProducts().subscribe((response: any) => {
      //store to products array the response from you api
      this.products = response;
        console.log(response);
    });
  }
}
