import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms'

import {ServerComponent} from './server/server.component'
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasichighlightDirective } from './basicHighlighterDirective/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, CockpitComponent, 
    ServerElementComponent, BasichighlightDirective, BetterHighlightDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
