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

  constructor(private socketService: SocketService){}

  ngOnInit(){
    this.socketService.getMessage()
      .subscribe((message: string)=>{
        this.messageList.push(message);
      });
  }

  sendMessage(){
    console.log(this.newMessage);
    this.socketService.sendMessage(this.newMessage);
    this.newMessage= '';
    
    console.log(this.messageList);
  }
}
