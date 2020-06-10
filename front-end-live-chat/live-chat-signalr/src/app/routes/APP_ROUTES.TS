import { Routes } from '@angular/router';
import { LiveChatComponent } from '../views/live-chat/live-chat.component';
import { HomeComponent } from '../views/home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'live-chat', component: LiveChatComponent
    }
  ];
