/*importamos el decorador */
import {Component, Input, Output, EventEmitter} from '@angular/core'

import {Product} from '../../../product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  //con ! le decimos a ts que la propiedad no va a tomar el valor de null o undefined
  @Input() product!: Product
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  addCart(){
    console.log('agregar al carrito');
    this.productClicked.emit(this.product.id);
  }
}
