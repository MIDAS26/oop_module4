import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lab20-part2',
  templateUrl: './lab20-part2.component.html',
  styleUrls: ['./lab20-part2.component.css']
})
export class Lab20Part2Component implements OnInit {
  output: string = '';
  date: string = '';
  sex: string = '';

  constructor() {
  }

  onClickConvert(firstName: string, lastName: string, dateOfBirth: string, email: string, sex: string): void {
    if (firstName == '' || lastName == '' || dateOfBirth == '' || email == '' || sex == '') {
      alert('Please enter all fields')
    } else {
      this.output = "First name: " + firstName + "<br>" + "Last name: " + lastName + "<br>" + "Date of birth: " + dateOfBirth + "<br>" + "Email: " + email + "<br>" + "Sex: " + sex;
    }
  }
  getDate(date: HTMLInputElement): void {
    this.date = date.value;
  }
  ngOnInit(): void {
  }

}
