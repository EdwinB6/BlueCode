import { Component, OnInit } from '@angular/core';
import { LoaderComponentService } from '@services/loader-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public loaderService: LoaderComponentService) { }

  ngOnInit(): void {
    this.loaderService.runLoader(2000, () => {
      console.log('Loading home...');
    })
  }
}
