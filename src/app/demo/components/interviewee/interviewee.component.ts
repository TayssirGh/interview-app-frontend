import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './interviewee.component.html',
  providers: [MessageService] // Include MessageService here
})
export class IntervieweeComponent implements OnInit {

  // Modèle pour les informations du candidat
  candidate = {
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    interviewDates: [] as Date[] // Assurez-vous que c'est un tableau de dates
  };

  // Liste des professions (vous pouvez la remplir avec vos options spécifiques)
  professions = [
    { label: 'Java Developer', value: 'java-developer' },
    { label: 'Python Developer', value: 'python-developer' },
    { label: 'Frontend Developer', value: 'frontend-developer' },
    { label: 'Backend Developer', value: 'backend-developer' },
    { label: 'DevOps Engineer', value: 'devops-engineer' }
];


  // Variables pour la date minimum et maximum
  minDate: Date;
  maxDate: Date;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    // Initialiser les dates min et max si nécessaire
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1); // Par exemple, jusqu'à un an dans le futur
  }

  // Méthode pour soumettre le formulaire
  submitForm() {
    // Vous pouvez ajouter votre logique de soumission ici
    if (this.isFormValid()) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Interview request submitted successfully!' });
      // Vous pouvez envoyer le formulaire ici ou effectuer une autre action (par exemple, appel API)
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all required fields.' });
    }
  }

  // Méthode pour vérifier la validité du formulaire
  isFormValid(): boolean {
    return this.candidate.firstName && this.candidate.lastName && this.candidate.email && this.candidate.profession && this.candidate.interviewDates.length >= 3;
  }
}
