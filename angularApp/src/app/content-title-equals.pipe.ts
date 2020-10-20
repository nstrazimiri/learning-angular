import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTitleEquals'
})
export class ContentTitleEqualsPipe implements PipeTransform {

  transform(contentItem: Content,titleSearch?: string):boolean {
 
    if(titleSearch && titleSearch !=""){
     
        if (contentItem.title.toLowerCase().includes(titleSearch.toLowerCase())){
          return true;
        }
  
    }
    return false;
  }



}
