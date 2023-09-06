import { Component, OnInit } from '@angular/core';
import { LoaderComponentService } from 'app/core/services/loader-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public loaderService: LoaderComponentService) { }

  ngOnInit(): void {
    // Show loader
    this.loaderService.showLoader();
    // Hide loader
    setTimeout(()=>{
      this.loaderService.hideLoader();
    }, 2000)
    
  }
}
