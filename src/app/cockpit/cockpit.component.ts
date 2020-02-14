import { Component, OnInit,EventEmitter,Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  @ViewChild('serverContentInput',{static: true}) serverContentInput :ElementRef;
 
  onAddServer(serverNameInput:HTMLInputElement){
    this.newServerName = serverNameInput.value;
    this.newServerContent = this.serverContentInput.nativeElement.value;
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  onAddBlueprint(serverNameInput:HTMLInputElement){
    this.newServerName = serverNameInput.value;
    this.newServerContent = this.serverContentInput.nativeElement.value;
    this.bluePrintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

}
