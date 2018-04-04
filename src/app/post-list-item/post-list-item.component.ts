import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit 
{
  @Input() post: Post;

  constructor( private postService : PostService ) 
  {
  }

  ngOnInit() 
  {
  }

  onLoveIt() 
  {
    this.postService.addLoveIt(this.post);
  }

  onDontLoveIt() 
  {
    this.postService.removeLoveIt(this.post);
  }

  onDeletePost( post: Post )
  {
    this.postService.removePost( post );
  }
}