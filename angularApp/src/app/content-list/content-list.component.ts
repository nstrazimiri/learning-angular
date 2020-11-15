import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MessageService} from '../services/message.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contentList: Content[];
  inputSearch:string;
  selectedContent: Content;
    
  constructor(private contentService: ContentService, private messageService: MessageService) {



   }

   onSelect(content: Content): void {
    this.selectedContent = content;
    this.messageService.add(`You selected content: ${content.title}`);
  }


  ngOnInit(): void {
        //  this.contentList = this.contentService.getContents();
        this.contentService.getContentsObs()
        .subscribe(content => {
          this.contentList = content;
        });
  }

}
