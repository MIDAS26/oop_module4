import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-lab23-part2',
  templateUrl: './lab23-part2.component.html',
  styleUrls: ['./lab23-part2.component.css']
})
export class Lab23Part2Component implements OnInit {
  @ViewChild('UploadFileInput') uploadFileInput: ElementRef | undefined;
  myFilename = 'Select File';
  file: any;

  constructor() { }

  fileChangeEvent(fileInput: any): void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.myFilename = '';
      // @ts-ignore
      Array.from(fileInput.target.files).forEach((file: File) => {
        this.file = file;
        this.myFilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any): void => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (): void => {};
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Select Same file again
      // @ts-ignore
      this.uploadFileInput.nativeElement.value = '';
    } else {
      this.myFilename = 'Select File';
    }
  }

  ngOnInit(): void {
  }

}
