import { Component, OnInit } from '@angular/core';
import {Product, products} from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    //get the route parameter value
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));

    //use the productservice to connect to you http request pass the productId 
    this.productService.getProductDetails(productId)
    .subscribe((result: any) => {
  
     this.product = result.find(product => product.id === productId); //if you are going to get array in return
      // this.product = result; //if direct object 
    });

    console.log(this.product);
  }



}
