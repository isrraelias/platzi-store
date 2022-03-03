import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('',[/*Validators.minLength(12),Validators.maxLength(50),*/ Validators.email]);
    //este codigo sirve para escuchar un cambio dinamicamente
    // this.emailField.valueChanges.subscribe(value => {
    // console.log(value);
    // });
  }

  ngOnInit(): void {
  }

  sendEmail(){
    if (this.emailField.valid){
      console.log(this.emailField.value);
    }
  }

}
