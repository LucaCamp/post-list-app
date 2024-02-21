import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
  private usersEndpoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsEndpoint);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersEndpoint);
  }
}
