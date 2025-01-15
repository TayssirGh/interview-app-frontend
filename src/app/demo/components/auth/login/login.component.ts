import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSignIn() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/']); // Redirigez vers la page d'accueil
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred. Please try again.';
        console.error(error);
      }
    );
  }
}
