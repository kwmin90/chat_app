import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  getMessage(){
    return Observable.create((observer) =>{
      this.socket.on('message', (message)=>{
        observer.next(message);
      });
    });
  }
  sendMessage(message: string){
    this.socket.emit('message', message);
  }
  getAllUser(){
    return Observable.create((observer)=>{
      this.socket.on('allUsers', (users)=>{
        observer.next(users);
      });
    });
  }
  sendUsername(username: string){
    this.socket.emit('username', username);
  }
}
