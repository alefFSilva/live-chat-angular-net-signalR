import { Component, OnInit } from '@angular/core';
import { LiveChatService } from './../../services/live-chat-service';
import { MessageDTO } from './DTO/MessageDTO';
import { MessageTypeEnum } from './Enums/MessageTypeEnum';

@Component({
    selector: 'live-chat',
    templateUrl: 'live-chat.component.html',
    styleUrls: ['live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

    public messageTypeEnumRef: typeof MessageTypeEnum;
    public chatMessages: MessageDTO[];

    private _liveChatService: LiveChatService;

    constructor(liveChatService: LiveChatService){
        this.chatMessages = [];
        this.messageTypeEnumRef = MessageTypeEnum;
        this._liveChatService = liveChatService;
    }

    public ngOnInit(): void {
        localStorage.setItem('userName', 'Alef');

        this._liveChatService.initializeNewUserConnection();
        this._liveChatService.newMessageReceivedEvent.subscribe((newMessage: MessageDTO) => {
            this.chatMessages.push(newMessage);
        });
    }

    public sendNewMessage(messageContent: string): void {
        const currentUserName = this._liveChatService.CurrentUserName;
        const newMessage = new MessageDTO(currentUserName, messageContent, MessageTypeEnum.CurrentUserMessage);
        this.chatMessages.push(newMessage);
        this._liveChatService.sendNewMessage(messageContent);
    }
}
