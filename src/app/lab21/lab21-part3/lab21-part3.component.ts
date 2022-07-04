import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-lab21-part3',
  templateUrl: './lab21-part3.component.html',
  styleUrls: ['./lab21-part3.component.css']
})
export class Lab21Part3Component implements OnInit {
  result: string | number = 103600 + " $";
  options = this._formBuilder.group({
    leather: false,
    wheels: false,
    color: false,
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  change(): void {
    let result = 103600
    this.result = result + (this.options.value.color ? 1950 : 0) + (this.options.value.wheels ? 1300 : 0) + (this.options.value.leather ? 3500 : 0) + ' $'
  }

  ngOnInit(): void {
  }

}
