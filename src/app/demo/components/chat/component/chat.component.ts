import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer: ElementRef;

  messages: { text: string, isSent: boolean }[] = [];
  newMessage: string = '';
  picc: string = 'path_to_profile_picture.jpg';

  sendMessage() {
    if (this.newMessage.trim()) {
      const newMessage = {
        text: this.newMessage,
        isSent: true
      };
      this.messages.push(newMessage);
      this.newMessage = '';
    }
  }

  // Cette méthode sera appelée après chaque mise à jour du composant
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    } catch (err) {
      console.error('Erreur lors du défilement:', err);
    }
  }
}
