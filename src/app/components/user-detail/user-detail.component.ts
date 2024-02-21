import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  users: User[]
  userId: number

  constructor(
    private route: ActivatedRoute,
    private postservice: PostService
    ){
  }

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id']

    this.postservice.getUsers().subscribe((users)=>{
      this.users = users.filter(user => user.id === this.userId);
    })

    console.log(this.userId)

  }

  
}
