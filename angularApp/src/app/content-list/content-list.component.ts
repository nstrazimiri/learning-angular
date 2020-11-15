import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contentList: Content[];
  inputSearch:string;
    
  constructor(private contentService: ContentService) {



   }


  ngOnInit(): void {
        //  this.contentList = this.contentService.getContents();
        this.contentService.getContentsObs().subscribe(content => {
          this.contentList = content;
        });
  }

}
