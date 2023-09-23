import { Component, OnInit } from '@angular/core';
import { LoaderComponentService } from '@services/loader-component.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  politics = [
    { title: 'Agile Development', description: 'An iterative approach to software development that emphasizes collaboration, flexibility, and customer satisfaction.', politicImg: 'assets/images/vectors/programming.svg' },
    { title: 'Data Protection', description: 'Safeguarding sensitive information from unauthorized access, disclosure, alteration, or destruction.', politicImg: 'assets/images/vectors/data.svg'},
    { title: 'Software Quality', description: 'Ensuring the overall performance, reliability, and functionality of a software product through testing and continuous improvement.', politicImg: 'assets/images/vectors/mobile.svg'},
    { title: 'Updating and Maintenance', description: 'Regular updates and maintenance to fix bugs, enhance features, and ensure compatibility with changing environments.', politicImg: 'assets/images/vectors/updating.svg'},
    { title: 'Information Security', description: 'Protecting data and systems from threats like hacking, malware, and data breaches through security measures and best practices.', politicImg: 'assets/images/vectors/information-security.svg' },
    { title: 'Change Management', description: 'Managing the process of planning, implementing, and controlling changes to software systems to adapt to evolving needs and technologies.', politicImg: 'assets/images/vectors/change.svg' },
    { title: 'Collaboration and Communication', description: 'Effective teamwork and communication within software development teams to ensure efficiency and clarity.', politicImg: 'assets/images/vectors/collaboration.svg' },
    { title: 'Code Quality and Review', description: 'Evaluating code for readability, maintainability, and efficiency through peer code reviews.', politicImg: 'assets/images/vectors/quality.svg' },
    { title: 'Social Responsibility', description: 'Addressing ethical considerations in software development, such as environmental impact, diversity and inclusion, and responsible technology use.', politicImg: 'assets/images/vectors/talking.svg' },
    { title: 'Standards and Regulations', description: 'Compliance with industry standards and regulations, particularly in highly regulated sectors like healthcare or finance.', politicImg: 'assets/images/vectors/standars.svg' },
    { title: 'Customer Service', description: 'Providing excellent customer service by addressing inquiries, resolving issues, and ensuring customer satisfaction.', politicImg: 'assets/images/vectors/customer-attention.svg' }
  ];

  constructor(public loaderService: LoaderComponentService) { }
  
  ngOnInit(): void {
    this.loaderService.runLoader(2000, () => {
      console.log('Loading politics...');
    })
  }
}
