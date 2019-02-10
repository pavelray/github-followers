import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppError } from './common/app-error';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

import { DataService } from './services/data.service';
import { GithubFollowersService } from './services/github-followers.service';


@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
    
  ],
  providers: [
    DataService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
