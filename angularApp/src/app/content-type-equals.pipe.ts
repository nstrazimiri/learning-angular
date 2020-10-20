import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeEquals'
})
export class ContentTypeEqualsPipe implements PipeTransform {

  transform(contentList: Content[],typeSearch?: string): Content[] {
    return typeSearch? contentList.filter(c => c.type.includes(typeSearch)):contentList;
  }

}
