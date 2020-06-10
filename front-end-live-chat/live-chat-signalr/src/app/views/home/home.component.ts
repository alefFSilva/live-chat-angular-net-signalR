import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LiveChatService } from './../../services/live-chat-service';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss']
})
export class HomeComponent {

    private _liveChatService: LiveChatService;
    private _router: Router;

    constructor(router: Router, liveChatService: LiveChatService) {
        this._router = router;
        this._liveChatService = liveChatService;
    }

    public onEnterButtonClicked(userName: string){
        this._liveChatService.setUserName(userName);
        this._router.navigate(['/live-chat']);
    }
}
