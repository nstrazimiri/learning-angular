import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import {FormsModule} from '@angular/forms';
import { ContentTypeEqualsPipe } from './pipes/content-type-equals.pipe';
import { ContentTitleEqualsPipe } from './pipes/content-title-equals.pipe';
import { HoverStyleDirective } from './directives/hover-style.directive';
import { HoverCardDirective } from './directives/hover-card.directive';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypeEqualsPipe,
    ContentTitleEqualsPipe,
    HoverStyleDirective,
    HoverCardDirective,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
