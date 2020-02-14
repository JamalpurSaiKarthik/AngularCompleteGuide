import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles : [`
    .online{color:white;}
    `]
})

export class ServerComponent{
 serverId : number = 10;
 serverstatus :string = 'Offline';

 constructor(){
     this.serverstatus = Math.random() > 0.5 ? 'Online' : 'Offline'
 }

 getServerStatus()
 {
     return this.serverstatus;
 }

 getColor() {
    return this.serverstatus ==='Online' ? 'green' : 'red';
  }



}