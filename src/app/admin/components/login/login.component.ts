import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formlogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.builderForm();
  }

  ngOnInit(): void {
  }

  private builderForm(){
    this.formlogin = this.formBuilder.group({
      user: ['',[Validators.required]],
      password: ['',Validators.required],
    });
  }

  get userField(){
    return this.formlogin.get('user');
  }

  get passwordField(){
    return this.formlogin.get('password');
  }

  //temporalmente
  sendDataLogin(event: Event){
    //quita la accion por defecto, esto evita que no haga su comportamiento por defecto en este caso actualizar
    //lapagina luego de enviaR EL FORMULARIO
    event.preventDefault();
    //por buena practica se valida
    if (this.formlogin.valid) {
      const product = this.formlogin.value;
      console.log(product);
    }
  }

}
