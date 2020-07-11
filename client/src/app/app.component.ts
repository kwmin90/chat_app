import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'client';
  newMessage: string;
  messageList: string[] = [];
  usersList: any;

  constructor(private socketService: SocketService){}

  ngOnInit(){
    this.getUsernameAndSend();
    this.socketService.getAllUser()
      .subscribe((data)=>{
        this.usersList = data.users.map(a =>a.username);
      });
    this.socketService.getMessage()
      .subscribe((message: string)=>{
        this.messageList.push(message);
      });
  }

  sendMessage(){
    this.socketService.sendMessage(this.newMessage);
    this.newMessage= '';
  }
  getUsernameAndSend(){
    let user = prompt("Please enter your username", "harry potter");
    this.socketService.sendUsername(user);
  }
}
