import { Component, OnInit } from '@angular/core';
import { LoaderComponentService } from 'app/core/services/loader-component.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  serviceList = [
    {
      title: 'Custom Modules',
      description:
        'We develop adaptive software modules according to your needs.',
      imgService: 'assets/images/vectors/custom-module.svg',
    },
    {
      title: 'Agile Platform',
      description: 'Request small modules efficiently through our platform.',
      imgService: 'assets/images/vectors/agile-platform.svg',
    },
    {
      title: 'Quick Response',
      description: 'We guarantee a 72-hour response time for your requests.',
      imgService: 'assets/images/vectors/quick-response.svg',
    },
    {
      title: 'Adaptability and Agility',
      description: 'Our solutions adapt to your changing requirements.',
      imgService: 'assets/images/vectors/adaptability.svg',
    },
    {
      title: 'Remote Innovation',
      description:
        'Colombian remote team driving innovative technological solutions.',
      imgService: 'assets/images/vectors/innovation-remote.svg',
    },
  ];

  constructor(public loaderService: LoaderComponentService) { }

  ngOnInit(): void {
    // Show loader
    this.loaderService.showLoader();
    // Hide loader
    setTimeout(()=>{
      this.loaderService.hideLoader(0);
    }, 3000)
  }
}
