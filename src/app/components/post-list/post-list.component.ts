import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{
  posts: Post[] = [];
  users: User[] = [];
  currentTheme = 'red'

  constructor(private postservice: PostService){}

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  getPosts(){
    this.postservice.getPosts().subscribe((posts) =>
    {
      this.posts = posts;
    })
    
  }

  getUsers(){
    this.postservice.getUsers().subscribe((users)=>{
      this.users = users;
    })
  }

  onChangeTheme(){
    if(this.currentTheme === 'red'){
      this.currentTheme = 'blue'
    }else this.currentTheme = 'red'
  }
}
