import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  contactInputs = [
    {type: 'text', name: 'floating_name', placeholder: ' ', id: 'name', formControl: 'name', label: 'Name'},
    {type: 'text', name: 'floating_surname', placeholder: ' ', id: 'surname', formControl: 'surname', label: 'Surname'},
    {type: 'email', name: 'floating_email', placeholder: ' ', id: 'email', formControl: 'email', label: 'Email'},
    {type: 'text', name: 'floating_phone', placeholder: ' ', id: 'phone', formControl: 'phone', label: 'Phone'},
    {type: 'text', name: 'floating_address', placeholder: ' ', id: 'address', formControl: 'address', label: 'Address'},
    {type: 'text', name: 'floating_city', placeholder: ' ', id: 'city', formControl: 'city', label: 'City'},
    {type: 'text', name: 'floating_country', placeholder: ' ', id: 'country', formControl: 'country', label: 'Country'},
    {type: 'text', name: 'floating_subject', placeholder: ' ', id: 'subject', formControl: 'subject', label: 'Subject'},
    {type: 'textarea', name: 'floating_message', placeholder: ' ', id: 'message', formControl: 'message', rows: '4', label: 'Message'}
  ];
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: [''],
      city: [''],
      country: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(255)]],
      options: ['general-inquiry'],
      availability: ['monday-friday'],
      priority: ['high']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(`Formulario enviado ${this.contactForm.value}`);
    }
    console.log("Hello");
  }
}
