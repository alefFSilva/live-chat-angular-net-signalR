import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LiveChatComponent } from './views/live-chat/live-chat.component';
import { LiveChatService } from './services/live-chat-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeComponent } from './views/home/home.component';
import { APP_ROUTES } from './routes/APP_ROUTES';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ LiveChatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
