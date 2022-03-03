import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  formRegistro!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

   //metodo para construir el formulario
   private buildForm(){
    this.formRegistro = this.formBuilder.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      contrasenia: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(14)]],
    }
    );
  }

  get nameField(){
    return this.formRegistro.get('name');
  }
  get emailField(){
    return this.formRegistro.get('email');
  }
  get contraseniaField(){
    return this.formRegistro.get('contrasenia');
  }

  saveUser(event: Event){
    //quita la accion por defecto, esto evita que no haga su comportamiento por defecto en este caso actualizar
    //lapagina luego de enviaR EL FORMULARIO
    event.preventDefault();
    //por buena practica se valida
    if (this.formRegistro.valid) {
      const newUser = this.formRegistro.value;
      console.log(newUser);
    }
  }

}
