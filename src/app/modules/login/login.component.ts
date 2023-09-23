import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoaderComponentService } from '@services/loader-component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isSubmitting = false;

  constructor(
    private loaderService: LoaderComponentService,
    private afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loaderService.hideLoader();

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.errorMessage = null;

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Login successful...');
        console.log(userCredential.user);
        this.isSubmitting = false;
      })
      .catch((error) => {
        this.errorMessage = `Login error: ${error.message}`;
        this.isSubmitting = false;
      });
  }
}
