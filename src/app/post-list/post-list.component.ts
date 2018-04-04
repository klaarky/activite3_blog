import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit, OnDestroy
{
  posts: Post[];
  postSubscription: Subscription;

  constructor( private postService : PostService, private router: Router ) 
  {
  }

  ngOnInit() 
  {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => 
      {
        this.posts = posts;
      }    
    );

    this.postService.emitPostSubject();
  }

  ngOnDestroy()
  {
      this.postSubscription.unsubscribe();
  }

  onDeletePost( post: Post )
  {
    this.postService.removePost( post );
    this.postService.emitPostSubject();
  }
}
