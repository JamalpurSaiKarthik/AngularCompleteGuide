import { Component, OnInit } from '@angular/core';

@Component({
  //selector: [app-servers], -- This is Attribute Selector and it should be used in 
  // html as <div app-servers></div>
  //selector: '.app-servers', -- This is Class Selector and it should be use in
  // html as <div class=app-servers></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus :string = 'Server was not created';
  serverName:string ='TestServer';
  serverCreated : boolean = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() { }

  ngOnInit() {
  }

  onServerAdded():void{
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created!!! And ServerName is '+this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
