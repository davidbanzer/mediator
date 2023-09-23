// chat.component.ts
import { Component } from '@angular/core';
import { ChatMediator } from 'src/models/chat-mediator';
import { User } from 'src/models/user';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  user1: User;
  user2: User;
  user1Message: string = ''; // Declarar user1Message
  user2Message: string = ''; // Declarar user2Message
  messages: string[] = []; // Array para almacenar mensajes

  constructor(private chatMediator: ChatMediator) {
    this.user1 = new User('User 1', chatMediator);
    this.user2 = new User('User 2', chatMediator);
  }

  sendMessage(message: string, sender: User) {
    sender.send(message);
    this.messages.push(`${sender.name}: ${message}`); // Agregar el mensaje al array de mensajes
    // Limpiar el campo de entrada después de enviar el mensaje
    if (sender === this.user1) {
      this.user1Message = '';
    } else {
      this.user2Message = '';
    }
  }
}
