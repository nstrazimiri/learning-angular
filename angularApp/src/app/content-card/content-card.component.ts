import { Component, OnInit, } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  contentList: ContentList;

  displayHTML:string="";

  constructor() {
  this.contentList = new ContentList();
    this.contentList.add({
      id:0,
      author:'Ndricim Strazimiri',
      title: 'College to have the winter online as well',
      type:'news',
      imgUrl:'https://picsum.photos/800/400?random=0',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
    });

    this.contentList.add({
      id:1,
      author:'John Doe',
      title: 'Wild life in Ontario',
      body:'Donec eget diam at libero lobortis ornare euismod vitae diam. In id tempus neque. Suspendisse rutrum ipsum vitae ante porttitor, sed pretium lorem ultrices. Cras at urna iaculis, pharetra leo in, facilisis magna. Nam vitae tortor sit amet neque maximus hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras faucibus lectus velit, sit amet cursus turpis sollicitudin consequat. Cras cursus risus mollis magna placerat sagittis. Donec auctor dolor vitae velit euismod, eget ultricies elit mollis. Nunc accumsan posuere odio. Pellentesque consequat, dolor sit amet ultrices feugiat, mauris mi condimentum nibh, vel euismod enim dui eu metus. Morbi ullamcorper tellus at nisi ultrices vulputate. In sit amet lectus ut sem cursus malesuada eget eget nisl.',
      imgUrl:'https://picsum.photos/800/400?random=1',
      tags:["deer","nature","canada"]
    
    });
    this.contentList.add({
      id:2,
      author:'Jane Smith',
      title: 'Photography tricks in 2020',
      body:'Praesent molestie ullamcorper fermentum. Praesent non nunc purus. Aenean sagittis imperdiet sapien, fermentum tincidunt diam tincidunt in. Cras gravida, tortor a semper posuere, est leo vestibulum nibh, ut congue justo velit vel odio. Aliquam dapibus ligula sit amet mauris egestas, ac tincidunt velit iaculis. Aenean consequat, ipsum in pulvinar gravida, sapien metus congue nisl, id volutpat velit nunc euismod purus. Phasellus ac interdum odio, et pharetra orci. Etiam bibendum vitae urna ac lobortis.',
      imgUrl:'https://picsum.photos/800/400?random=2',
    
    });

    this.contentList.add({
      id:3,
      author:'James Well',
      title: 'Corona & trending Conspiracy theories about it',
      body:'Phasellus arcu dolor, congue ut posuere ut, interdum eu nibh. Vivamus massa ante, dignissim id laoreet sit amet, semper ut tellus. Maecenas ac lacinia libero. Ut convallis, massa id elementum tincidunt, eros risus lobortis nibh, non porttitor neque dolor vel odio. Nunc suscipit libero nec magna posuere placerat. Curabitur eu neque in metus efficitur placerat. Cras pellentesque tortor mauris, non blandit eros ultrices sit amet. Aliquam euismod ex sit amet fermentum maximus. Proin tincidunt sagittis leo, sit amet suscipit ipsum rhoncus in. Morbi porta facilisis risus vitae condimentum. Donec tempor magna dolor, ultricies accumsan purus elementum quis. Duis scelerisque porttitor enim, ut eleifend erat sollicitudin quis. Fusce lectus augue, semper non tempus et, cursus vitae nisi.',
      imgUrl:'https://picsum.photos/800/400?random=3',
    
    });
    let contentListSize=this.contentList.size();
    for (let i = 0; i < contentListSize; i++) {
      this.displayHTML += this.contentList.show(i);
      
    }


    
   }

  ngOnInit(): void {
  }

}
