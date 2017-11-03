import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Control } from '@angular/common';
import { ChatService } from '../chat-service/chat-service.service';
import { NgModel } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  message;
  user;
  connection;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  	this.connection = this.chatService.getMessages().subscribe(message => {
  		this.messages.push(message);
  	});
  }

  ngOnDestroy() {
  	this.connection.unsubscirbe();
  }

  sendMessage(){
  	this.chatService.sendMessage(this.message, this.user);
  	this.message = '';
  }

}
