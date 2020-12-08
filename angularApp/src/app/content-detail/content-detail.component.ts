import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  _id: number;
  content: Content;
  constructor(private route: ActivatedRoute, private contentService: ContentService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.contentService.getContent(this._id).subscribe(singleContent => {
        this.content = singleContent;
      });
    });
  }

}
