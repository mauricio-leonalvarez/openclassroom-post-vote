import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postText: string;
  @Input() postDate: Date;
  @Input() postAppr: number;

  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.postTitle;
  }
  getContent(){
    return this.postText;
  }
  getDate(){
    return this.postDate;
  }
  loveItsAction(action:string){
    if (action === "add"){
      this.postAppr++;
    } else if (action === "dec"){
      this.postAppr--;
    }
  }  
  getLoveIts(){
    return this.postAppr;
  }

}
