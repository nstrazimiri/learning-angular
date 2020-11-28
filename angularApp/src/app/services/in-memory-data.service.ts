import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb(): object {
    const fred: Content[] = CONTENTLIST;
    return { fred };
  }
  genId(fred: Content[]): number{
    return fred.length > 0 ?
      Math.max(...fred.map(content => content.id)) + 1
      : 2000;
  }
}
