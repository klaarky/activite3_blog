import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../../models/Post.model';

@Injectable()
export class PostService {

    postSubject = new Subject<any[]>();
        
    private posts: Post[] = 
    [
        {
            id: 0,
            title: 'Mon premier post',
            content: 'Contenu du premier post',
            loveIts: 1,
            created_at: new Date('March 21, 2018 15:24:12')
        },
        {
            id: 1,
            title: 'Mon deuxième post',
            content: 'Contenu du deuxième post',
            loveIts: -1,
            created_at: new Date('March 23, 2018 11:55:54')
        },
        {
            id: 2,
            title: 'Mon troisième post',
            content: 'Contenu du troisième post',
            loveIts: 0,
            created_at: new Date('March 29, 2018 16:48:32')
        }
    ];

    emitPostSubject()
    {
        this.postSubject.next( this.posts.slice() );
    }

    addPost( postToAdd: Post ) 
    {
        this.posts.push( postToAdd );
        this.emitPostSubject();
    }

    removePost( postToRemove: Post ) 
    {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) =>
            {
                if( postEl === postToRemove)
                {
                    return true;
                }
            }
        )
        this.posts.splice(postIndexToRemove, 1);
        this.emitPostSubject();
    }

    addLoveIt( post: Post )
    {
        const postIndex = this.posts.findIndex(
            (postEl) =>
            {
                if( postEl === post)
                {
                    return true;
                }
            }
        )

        this.posts[postIndex].loveIts++;
        this.emitPostSubject();
    }

    removeLoveIt( post: Post )
    {
        const postIndex = this.posts.findIndex(
            (postEl) =>
            {
                if( postEl === post)
                {
                    return true;
                }
            }
        )

        this.posts[postIndex].loveIts--;
        this.emitPostSubject();
    }
}