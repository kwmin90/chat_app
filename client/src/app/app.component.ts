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
  usersList: string[] = [];

  constructor(private socketService: SocketService){}

  ngOnInit(){
    this.getUsernameAndSend();
    this.socketService.getUser()
      .subscribe((user:string)=>{
        this.usersList.push(user);
      });
    this.socketService.getMessage()
      .subscribe((message: string)=>{
        this.messageList.push(message);
      });
  }

  sendMessage(){
    this.socketService.sendMessage(this.newMessage);
    this.newMessage= '';
    
    console.log(this.messageList);
  }
  getUsernameAndSend(){
    let user = prompt("Please enter your username", "harry potter");
    this.socketService.sendUsername(user);
  }
}
