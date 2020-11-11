import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: Content;

  constructor() {
    this.newContent = {
      id: 0,
      title: '',
      body:'',
      type:'',
      tags:[],
      author:'',
      imgUrl:''
    };
   }

  ngOnInit(): void {
    // this.newContentEvent.emit(this.newContent);

  }

  addContent(): void{
    console.log('Event Emitted!', this.newContent.title);
    this.newContent.id = +this.newContent.id;
    if( this.newContent.title==''){
      console.log("Title is required")
    }else{
    this.newContentEvent.emit(this.newContent);
    }
  }

}
