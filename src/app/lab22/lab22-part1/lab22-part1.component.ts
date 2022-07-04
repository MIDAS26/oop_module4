import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-lab22-part1',
  templateUrl: './lab22-part1.component.html',
  styleUrls: ['./lab22-part1.component.css']
})
export class Lab22Part1Component implements OnInit {
  cityValue: string = '';
  output: string = '';
  cities: any = ["Kyiv", "Lviv"];
  date: string = '';

  constructor() {
  }

  getDate(date: HTMLInputElement): void {
    this.date = date.value;
  }

  changeValue(value: string): void {
    this.cityValue = value;
  }

  addCity(value: string): void {
    if (value !== '') {
      this.cities.push(value);
    }
  }

  onClickConvert(firstName: string, lastName: string, dateOfBirth: string, city: string): void {
    if (firstName == '' || lastName == '' || dateOfBirth == '' || this.cityValue == '') {
      alert('Please enter all fields')
    } else {
      this.output = "First name: " + firstName + "<br>" + "Last name: " + lastName + "<br>" + "Date of birth: " + dateOfBirth + "<br>" + "City: " + this.cityValue;
    }
  }

  ngOnInit(): void {
  }
}
