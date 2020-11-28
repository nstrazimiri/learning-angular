import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import { MessageService } from '../services/message.service';



@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: any;
  constructor(private contentService: ContentService,private messageService: MessageService) { 
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {

  }
  addContent(): void{
    let newContentFromServer: Content;
    console.log("Trying to add the content to the list", this.newContent);
    this.contentService.addContent(this.newContent).subscribe(serverContent => {
      this.messageService.add("Added the content to the list");

      newContentFromServer = serverContent;
      newContentFromServer.tags = [newContentFromServer.tags[0]]
      this.newContentEvent.emit(newContentFromServer);
    });

    // console.log('Event Emitted!', this.newGame.title);
  }
  updateContent(): void{
    this.newContent.id = +this.newContent.id;
    console.log("Trying to update the content to the list", this.newContent);
    this.contentService.updateContent(this.newContent).subscribe(_ => {
      this.messageService.add('Content Updated');

      this.updateContentEvent.emit("Content that was updated should be id: " + this.newContent.id);
    });
  }

}
