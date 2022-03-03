import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';
  title_ejemplo = 'soy ejemplo';
  items = ['nicolas','Peres','Juan',];
  nombreFor:string = "";
  nombreSwitch:string = "";
  power:number = 10;



  addItem(){
    this.items.push(this.nombreFor);
    this.nombreFor = "";
    document.getElementById('hola')?.focus();
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }


}
