import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContents(): Content[] { // synchronous
    return CONTENTLIST;
  }
  getContentsObs(): Observable<Content[]>{ // asynchronous
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Content retrieved');
    return of(CONTENTLIST);
  }
}
