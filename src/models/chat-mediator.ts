// chat-mediator.ts
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class ChatMediator {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    }
  }
}
