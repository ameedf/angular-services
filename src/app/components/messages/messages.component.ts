import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/services/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
    this.service.getMessages().subscribe(data => this.messages = data);
  }

}
