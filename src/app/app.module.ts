import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ShortNamePipe } from './shortName.pipe';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ShortNamePipe,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
