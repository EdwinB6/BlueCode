import { Component } from '@angular/core';
import { LoaderComponentService } from '@services/loader-component.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private loaderService: LoaderComponentService) { }

  ngOnInit(): void {
    this.loaderService.hideLoader();
  }
}
