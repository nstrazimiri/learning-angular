import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContents(): Content[] { // synchronous
    return CONTENTLIST;
  }
  getContentsObs(): Observable<Content[]>{ // asynchronous
    return of(CONTENTLIST);
  }
}
