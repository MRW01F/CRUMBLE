import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { PostModel } from '../../shared/post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/comment/comment.service';
import { CommentPayload } from 'src/app/comment/comment.payload';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class UserPostComponent implements OnInit {

  faComments = faComments;
  @Input() 
  // posts: PostModel[];
  posts: Array<PostModel> = [];
  sort: Array<PostModel> = this.posts;
  name: string;
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;
 

  constructor(private activatedRoute: ActivatedRoute, private router: Router ,private postService: PostService,
    private commentService: CommentService) {
      this.name = this.activatedRoute.snapshot.params.name;
      this.postService.getAllPosts().subscribe(post => {
        this.posts = post;
      });
     }

  ngOnInit(): void {
    this.sort = this.sort.filter(
      (items)=>{
        return (items.userName).indexOf(this.name) > -1
      }
    )
    console.log(this.sort);
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

  
}
