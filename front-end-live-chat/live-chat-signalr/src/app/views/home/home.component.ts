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
    private _hasInputError: boolean;

    constructor(router: Router, liveChatService: LiveChatService) {
        this._router = router;
        this._liveChatService = liveChatService;
        this._hasInputError = false;
    }

    public get hasInpurError(): boolean{
        return this._hasInputError;
    }

    public onEnterButtonClicked(userName: string): void {
        this._hasInputError = userName === '' || userName === undefined;

        if (this._hasInputError) {
            this._hasInputError = true;
        } else {
            this._liveChatService.setUserName(userName);
            this._router.navigate(['/live-chat']);
        }
    }
}
