import { Component, Input, OnInit, } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {


  @Input() content: Content;

  
  imageClicked(id:number){
    console.log("You clicked the image of item #"+id);
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
