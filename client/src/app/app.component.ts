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
    this.socketService.getAllUser()
      .subscribe((data)=>{
        console.log(data);
        this.usersList.push(data.users[0].username);
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
