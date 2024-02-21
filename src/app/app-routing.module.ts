import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: PostListComponent, pathMatch: 'full'},
  {path: 'user/:id', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
