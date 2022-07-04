import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-lab22-part3',
  templateUrl: './lab22-part3.component.html',
  styleUrls: ['./lab22-part3.component.css']
})
export class Lab22Part3Component implements OnInit {
  output: string = '';
  price: string = '';
  extras: string = '';
  options = this._formBuilder.group({
    nuts: false,
    cherry_topping: false,
    chocolate_balls: false,
  });

  constructor(private _formBuilder: FormBuilder) { }

  change(): void {
    this.extras = ((this.options.value.nuts ? 2 : 0) + (this.options.value.cherry_topping ? 1 : 0) + (this.options.value.chocolate_balls ? 3 : 0)).toString();
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  onClickConvert(price: string, amount: string): void {
    if (price == '' || amount == '') {
      alert('Please enter all fields')
    } else {
      this.output = "Total price is: " + (parseInt(price) * parseInt(amount) + parseInt(this.extras)) + " $"
    }
  }

  ngOnInit(): void {
  }

}
