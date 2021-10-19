import { Component, OnInit } from '@angular/core';
import { Product, products} from '../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}
