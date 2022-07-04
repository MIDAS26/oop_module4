import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab21-part2',
  templateUrl: './lab21-part2.component.html',
  styleUrls: ['./lab21-part2.component.css']
})
export class Lab21Part2Component implements OnInit {
  output: string = '';
  price: string = '';

  constructor() { }

  onClickConvert(price: string, amount: string): void {
    if (price == '' || amount == '') {
      alert('Please enter all fields')
    } else {
      this.output = "Total price is: " + parseInt(price) * (parseInt(amount) >= 20 ? parseInt(amount) * 0.9 : parseInt(amount)) + " $"
    }
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  ngOnInit(): void {
  }

}
