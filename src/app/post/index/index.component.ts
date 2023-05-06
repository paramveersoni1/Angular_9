import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';

import { Post } from '../post';
import { MatDialog } from '@angular/material';
import { CreateComponent } from '../create/create.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']

})

export class IndexComponent implements OnInit {
  posts: Post[] = [{
    title: "firstTitle",
    body: [{nestedFieldControl:'this is first post'}],
    reply:['this is first replay']
  }];
  searchData = '';
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    // this.postService.getAll().subscribe((data: Post[])=>{
    //   this.posts = data;
    //   console.log(this.posts);
    // })  
  }
  openCreatePost(data : any, index : any){
     if(index || index == 0){
       data.index = index;
     }
     const dailogRef  = this.dialog.open(CreateComponent,{
      hasBackdrop: false,
      "width":'500px',
      "height":'500px',
      data: data,
    })
    
    dailogRef.afterClosed().subscribe((data:any)=>{
      if(data){
        if(data?.index || data?.index==0){
          this.posts[data?.index] = data;
        }
        else{
          this.posts.push(data);
        }
        console.log(data,'............')
      }
    })
  }
  

  deletePost(id){
    this.posts.splice(id, 1);
  }
  viewPost(post) {
    const dailogRef  = this.dialog.open(ViewComponent,{
      hasBackdrop: false,
      "width":'500px',
      "height":'500px',
      data: post,
    })
  }
  

}