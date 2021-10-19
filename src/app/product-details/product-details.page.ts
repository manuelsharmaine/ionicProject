import { Component, OnInit } from '@angular/core';
import {Product, products} from '../products';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));


    this.product = products.find(product => product.id === productId);

    console.log(this.product);
  }



}
