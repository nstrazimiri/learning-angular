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
  errors:String[];

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

    this.errors = [];
   }

  ngOnInit(): void {
    // this.newContentEvent.emit(this.newContent);

  }


  addContent(): void{
    const formPromise = new Promise((success, fail) => {
      this.errors = [];
      if(this.newContent.title == ''){
        this.errors.push('Title');
      }
      if(this.newContent.body == ''){
        this.errors.push('Body');
      }
      if(this.newContent.author == ''){
        this.errors.push('Author');
      }
      if (this.errors.length==0){
        this.newContentEvent.emit(this.newContent);
        success('Added the content with title: '+ this.newContent.title);
      }else{
        fail('Please fill the required fields and try again');
      }
    });
    formPromise.then((successResult: string) => {
      console.log('Success! ', successResult);
    }).catch((failResult: string) => console.log('Failure!: ', failResult));

  }

  

}
