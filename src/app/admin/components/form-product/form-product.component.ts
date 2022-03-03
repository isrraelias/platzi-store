import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from "./../../../core/services/products/products.service";
import { MyValidators } from "../../../utils/myValidator";

/*
  FormGroup tiene los varios controladores como email, titulo, etc
  FormBuilder extensión de angular para crear un grupo rapidamente
*/

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
  ) {
    //llamamos al metodo para crear el formulario
    this.buildform();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    //quita la accion por defecto, esto evita que no haga su comportamiento por defecto en este caso actualizar
    //lapagina luego de enviaR EL FORMULARIO
    event.preventDefault();
    //por buena practica se valida
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) =>
      {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      });
    }
  }

  //construye el formulario
  private buildform(){
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title:['',[Validators.required]],
      price:['',[Validators.required,MyValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],
    });
  }

  get priceField(){
    return this.form.get('price')
  }
}
