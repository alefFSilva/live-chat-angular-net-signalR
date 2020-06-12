import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { LiveChatComponent } from './views/live-chat/live-chat.component';
import { LiveChatService } from './services/live-chat-service';
import { HomeComponent } from './views/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'live-chat', component: LiveChatComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FontAwesomeModule
  ],
  providers: [ LiveChatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
