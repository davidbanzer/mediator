import { ChatMediator } from "./chat-mediator";

// user.ts
export class User {
  constructor(public name: string, private chatMediator: ChatMediator) {
    this.chatMediator.addUser(this);
  }

  send(message: string) {
    this.chatMediator.sendMessage(message, this);
  }

  receiveMessage(message: string) {
    console.log(`${this.name} received message: ${message}`);
  }
}
