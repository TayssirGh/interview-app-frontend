import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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

    constructor(public layoutService: LayoutService) { }

    onRegister() {
        if (this.password !== this.confirmPassword) {
            alert('Passwords do not match!');
        } else {
            alert('Account successfully registered!');
            // Ajouter ici la logique de gestion des utilisateurs (e.g., envoi au backend).
        }
    }
}
