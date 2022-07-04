import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab23-part3',
  templateUrl: './lab23-part3.component.html',
  styleUrls: ['./lab23-part3.component.css']
})
export class Lab23Part3Component implements OnInit {
  imagesArr = [
    './assets/img/common/BMW_M5_Competition_2021.jpg',
    './assets/img/common/Mercedes_AMG_S63_Coupe_2021.jpg',
    './assets/img/common/202-2028400_nissan-gt-r-nismo-pixel-nissan-gtr-nismo.png',
    './assets/img/common/audi_r8.png',
    './assets/img/common/porsche-911-gt3-rs-991-MK2-jaune-racing-gelb-pack-weissach-01-1024x576.jpg'
  ];
  headerArr = [
    'BMW M5',
    'Mercedes s63 AMG',
    'Nissan GTR r35 Skyline',
    'Audi r8',
    'Porsche 911 gt3 rs'
  ];
  count: number = 0;
  disabledNext: boolean = false;
  disabledPrevious: boolean = false;

  constructor() {}

  onClickNext(): void {
    if (this.count < this.imagesArr.length - 1) {
      this.count++;
      this.disabledPrevious = false;
      if (this.count == this.imagesArr.length - 1) {
        this.disabledNext = true;
      }
    } else {
      this.disabledNext = true;
      this.disabledPrevious = false;
    }
  }

  onClickPrevious(): void {
    if (this.count > 0) {
      this.count--;
      this.disabledNext = false;
      if (this.count == 0) {
        this.disabledPrevious = true;
      }
    } else {
      this.disabledPrevious = true;
      this.disabledNext = false;
    }
  }

  ngOnInit(): void {
    this.onClickPrevious();
  }

}
