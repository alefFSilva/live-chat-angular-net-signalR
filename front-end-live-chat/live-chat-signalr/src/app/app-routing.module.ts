import { HomeComponent } from './views/home/home.component';
import { LiveChatComponent } from './views/live-chat/live-chat.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'live-chat', component: LiveChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
