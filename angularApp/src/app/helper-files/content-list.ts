import { strict } from 'assert';
import { stringify } from 'querystring';
import { Content } from './content-interface';

export class ContentList {
   private _items: Content[];
    constructor() {
        this._items = [];
    }

    //method to get all items
    get items(): Content[]{
        return this._items;
    }

    //method to add an item to the end of the array
    add(item: Content) {
        return this._items.push(item);
    }
    
    //how many items do we have
    size(){
        return this._items.length;
    }

      /**
       * Display item of given index, formatted in HTML
       * @param index the index of array
       */
      show(index:number):string{

        //if we are outside of capacity
          if (index >=this.size()){
              return "<p>You accesed a content that doesn't exist. Double check your indexes!</p>";
          }
          let formatted_str:string="<article>";
          formatted_str += "<h1>"+this._items[index].title+"</h1>"; 
          formatted_str += this._items[index].type? "<p><span>"+this._items[index].type+"</span></p>":""; 
          formatted_str += "<h2>"+this._items[index].author+"</h2>"; 
          formatted_str += "<p>"+this._items[index].body+"</p>"; 
          formatted_str += this._items[index].imgUrl?  "<img src='"+this._items[index].imgUrl+"' alt='Image of "+this._items[index].title+"'>":""; 
          
          //if we have tags
          if(this.items[index].tags){
          formatted_str += "<p class='tags'>";
            this.items[index].tags.forEach(el=>{
                formatted_str+= "<span>"+el+"</span> ";
            });
            formatted_str += "</p>";
        }
      
            formatted_str +="</article>";
        return formatted_str;
    }
        

    }