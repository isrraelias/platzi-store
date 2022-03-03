import { AbstractControl } from "@angular/forms";
// AbstractControl =>

export class MyValidators{

  //recordando que los metodos estaticos pueden ser llamados sin instaciar un objeto
  static isPriceValid(control: AbstractControl){
    const value: number = control.value;
    console.log(value);
    if (value > 10000) {
      //se retorna un json o un objecto con el nombre del error en true
      return {price_invalided: true};
    }
    return null;
  }

}
