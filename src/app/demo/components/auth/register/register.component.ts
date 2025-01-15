import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [` 
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important; 
    }
  `]
})
export class RegisterComponent {

  password!: string; 
  confirmPassword!: string;
  email!: string;

  constructor(private registerService: RegisterService) { }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      this.registerService.registerUser(this.email, this.password).subscribe({
        next: (response) => {
          alert('Account successfully registered!');
        },
        error: (error) => {
          // Vérifiez ici si l'erreur est un HttpErrorResponse
          if (error instanceof Error) {
            alert('Client-side error: ' + error.message);
          } else {
            // Si c'est une erreur HTTP, vous pouvez extraire plus d'informations
            alert('Error registering user: ' + (error.error ? error.error : error.message));
          }
        }
      });
    }
  }
}
