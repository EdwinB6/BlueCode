import { Component, OnInit } from '@angular/core';
import { LoaderComponentService } from '@services/loader-component.service';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.css']
})
export class CustomErrorComponent implements OnInit {

  constructor(private loaderService: LoaderComponentService) {}
  ngOnInit(): void {
    this.loaderService.runLoader(1000, () => {
      console.log('Loading error...');
    });
  }
}
