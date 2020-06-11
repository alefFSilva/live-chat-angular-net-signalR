import { MessageDTO } from './DTO/MessageDTO';
import { Component, OnInit } from '@angular/core';
import { MessageTypeEnum } from './Enums/MessageTypeEnum';

@Component({
    selector: 'live-chat',
    templateUrl: 'live-chat.component.html',
    styleUrls: ['live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

    public messageTypeEnumRef: typeof MessageTypeEnum;
    public chatMessages: MessageDTO[];

    constructor(){
        this.chatMessages = [];
        this.messageTypeEnumRef = MessageTypeEnum;
    }

    public ngOnInit(): void {
        const myMsg = new MessageDTO();
        myMsg.userName = 'Alef';
        myMsg.content = 'Olá';
        myMsg.messageType = MessageTypeEnum.CurrentUserMessage;

        const otherMsg = new MessageDTO();
        myMsg.userName = 'Fulano';
        otherMsg.content = 'Olá ! Tudo bem ?';
        otherMsg.messageType = MessageTypeEnum.OtherUser;

        const userEntered = new MessageDTO();
        userEntered.content = 'Fulano entrou no chat';
        userEntered.messageType = MessageTypeEnum.ChatActions;

        this.chatMessages.push(myMsg);
        this.chatMessages.push(otherMsg);
        this.chatMessages.push(userEntered);
    }
}
