import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})



export class ContentListComponent implements OnInit {
  contentList: Content[];
  inputSearch:string;
  

      
    

  constructor() {

    this.contentList=[
      {
        id:0,
        author:'Ndricim Strazimiri',
        title: 'College to have the winter online as well',
        type:'news',
        imgUrl:'https://picsum.photos/1000/400?random=0',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
      },
      {
        id:1,
        author:'John Doe',
        type:'travel',
        title: 'Wild life in Ontario',
        body:'Donec eget diam at libero lobortis ornare euismod vitae diam. In id tempus neque. Suspendisse rutrum ipsum vitae ante porttitor, sed pretium lorem ultrices. Cras at urna iaculis, pharetra leo in, facilisis magna. Nam vitae tortor sit amet neque maximus hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras faucibus lectus velit, sit amet cursus turpis sollicitudin consequat. Cras cursus risus mollis magna placerat sagittis. Donec auctor dolor vitae velit euismod, eget ultricies elit mollis. Nunc accumsan posuere odio. Pellentesque consequat, dolor sit amet ultrices feugiat, mauris mi condimentum nibh, vel euismod enim dui eu metus. Morbi ullamcorper tellus at nisi ultrices vulputate. In sit amet lectus ut sem cursus malesuada eget eget nisl.',
        imgUrl:'https://picsum.photos/1000/400?random=1',
        tags:["deer","nature","canada"]
      
      },
      {
        id:2,
        type:'tutorials',
        author:'Jane Smith',
        title: 'Photography tricks in 2020',
        body:'Praesent molestie ullamcorper fermentum. Praesent non nunc purus. Aenean sagittis imperdiet sapien, fermentum tincidunt diam tincidunt in. Cras gravida, tortor a semper posuere, est leo vestibulum nibh, ut congue justo velit vel odio. Aliquam dapibus ligula sit amet mauris egestas, ac tincidunt velit iaculis. Aenean consequat, ipsum in pulvinar gravida, sapien metus congue nisl, id volutpat velit nunc euismod purus. Phasellus ac interdum odio, et pharetra orci. Etiam bibendum vitae urna ac lobortis.',
        imgUrl:'https://picsum.photos/1000/400?random=2',
      
      },
      {
        id:3,
        author:'James Well',
        type:'health',
        title: 'Corona & trending Conspiracy theories about it',
        body:'Phasellus arcu dolor, congue ut posuere ut, interdum eu nibh. Vivamus massa ante, dignissim id laoreet sit amet, semper ut tellus. Maecenas ac lacinia libero. Ut convallis, massa id elementum tincidunt, eros risus lobortis nibh, non porttitor neque dolor vel odio. Nunc suscipit libero nec magna posuere placerat. Curabitur eu neque in metus efficitur placerat. Cras pellentesque tortor mauris, non blandit eros ultrices sit amet. Aliquam euismod ex sit amet fermentum maximus. Proin tincidunt sagittis leo, sit amet suscipit ipsum rhoncus in. Morbi porta facilisis risus vitae condimentum. Donec tempor magna dolor, ultricies accumsan purus elementum quis. Duis scelerisque porttitor enim, ut eleifend erat sollicitudin quis. Fusce lectus augue, semper non tempus et, cursus vitae nisi.',
        imgUrl:'https://picsum.photos/1000/400?random=3',
      
      },
      {
        id:4,
        author:'James Smith',
        type:'travel',
        title: 'Top 5 places to visit for Halloween in Ontario',
        body:'Congue arcu dolor, congue ut posuere ut, interdum eu nibh. Vivamus massa ante, dignissim id laoreet sit amet, semper ut tellus. Maecenas ac lacinia libero. Ut convallis, massa id elementum tincidunt, eros risus lobortis nibh, non porttitor neque dolor vel odio. Nunc suscipit libero nec magna posuere placerat. Curabitur eu neque in metus efficitur placerat. Cras pellentesque tortor mauris, non blandit eros ultrices sit amet. Aliquam euismod ex sit amet fermentum maximus. Proin tincidunt sagittis leo, sit amet suscipit ipsum rhoncus in. Morbi porta facilisis risus vitae condimentum. Donec tempor magna dolor, ultricies accumsan purus elementum quis. Duis scelerisque porttitor enim, ut eleifend erat sollicitudin quis. Fusce lectus augue, semper non tempus et, cursus vitae nisi.',
        imgUrl:'https://picsum.photos/1000/400?random=4',
      
      },
      {
        id:5,
        author:'Donald Fibonnaci',
        type:'tech',
        title: 'Laravel VS NodeJs, who is winning the battle',
        body:'Interdum eu nibh. Vivamus massa ante, dignissim id laoreet sit amet, semper ut tellus. Maecenas ac lacinia libero. Ut convallis, massa id elementum tincidunt, eros risus lobortis nibh, non porttitor neque dolor vel odio. Nunc suscipit libero nec magna posuere placerat. Curabitur eu neque in metus efficitur placerat. Cras pellentesque tortor mauris, non blandit eros ultrices sit amet. Aliquam euismod ex sit amet fermentum maximus. Proin tincidunt sagittis leo, sit amet suscipit ipsum rhoncus in. Morbi porta facilisis risus vitae condimentum. Donec tempor magna dolor, ultricies accumsan purus elementum quis. Duis scelerisque porttitor enim, ut eleifend erat sollicitudin quis. Fusce lectus augue, semper non tempus et, cursus vitae nisi.',
        imgUrl:'https://picsum.photos/1000/400?random=5',
      
      },      {
        id:6,
        author:'Darren Clean',
        type:'tech',
        title: 'iOS developers salary keeps increasing',
        body:'Givamus massa ante, dignissim id laoreet sit amet, semper ut tellus. Maecenas ac lacinia libero. Ut convallis, massa id elementum tincidunt, eros risus lobortis nibh, non porttitor neque dolor vel odio. Nunc suscipit libero nec magna posuere placerat. Curabitur eu neque in metus efficitur placerat. Cras pellentesque tortor mauris, non blandit eros ultrices sit amet. Aliquam euismod ex sit amet fermentum maximus. Proin tincidunt sagittis leo, sit amet suscipit ipsum rhoncus in. Morbi porta facilisis risus vitae condimentum. Donec tempor magna dolor, ultricies accumsan purus elementum quis. Duis scelerisque porttitor enim, ut eleifend erat sollicitudin quis. Fusce lectus augue, semper non tempus et, cursus vitae nisi.',
        imgUrl:'https://picsum.photos/1000/400?random=6',
      
      }
    ];


   }


  ngOnInit(): void {
  }

}
