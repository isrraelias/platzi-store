import { Component, OnInit } from '@angular/core';
//ActivateRoute para inyeccion de dependecia y Params para el tipado
import { ActivatedRoute,Params } from "@angular/router";
import { Product } from '../../../product.model';
import { ProductsService } from "../../../core/services/products/products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {} as Product;
  constructor(
    private route:ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      const id = params["id"];
      this.fecthProduct(id);
      // this.product = this.productsService.getProduct(id)!;
    });
  }

  fecthProduct(id: string){
    this.productsService.getProduct(id).subscribe(product =>{
      this.product = product;
    });
  }

  createProduct(){
    const newProduct = {
      id: "12",
      title: 'nuevo desde angular',
      image: 'assets/images/hoodie.png',
      price: 300,
      description: 'nuevo producto'
    };

    this.productsService.createProduct(newProduct).
     subscribe(product =>{
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
     // id: "12",
      price: 222,
      description: 'edicion description 2'
    };
    this.productsService.updateProduct('2',updateProduct).
     subscribe(product =>{
      console.log(product);
    });
  }
  deleteProduct(){
    const updateProduct: Partial<Product> = {
     // id: "12",
      price: 222,
      description: 'edicion description 2'
    };
    this.productsService.deleteProduct('12').
     subscribe(rta =>{
      console.log(rta);
    });
  }
}
