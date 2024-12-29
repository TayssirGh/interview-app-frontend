import { Component } from '@angular/core';

@Component({
  selector: 'app-interview1',
  templateUrl: './interview1.component.html',
  
})
export class Interview1Component {
  // Définir la propriété user
  user = {
    fullName: '',
    meetingCode: ''
  };

  // Méthode pour gérer le clic sur le bouton
  joinMeeting() {
    if (this.user.fullName && this.user.meetingCode) {
      console.log('Joining meeting with:', this.user);
      alert('Meeting joined successfully!');
    } else {
      alert('Please fill in all fields before joining the meeting.');
    }
  }
}
