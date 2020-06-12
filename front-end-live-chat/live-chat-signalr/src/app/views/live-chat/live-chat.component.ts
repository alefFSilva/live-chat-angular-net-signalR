import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { LiveChatService } from './../../services/live-chat-service';
import { MessageDTO } from './DTO/MessageDTO';
import { MessageTypeEnum } from './Enums/MessageTypeEnum';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'live-chat',
    templateUrl: 'live-chat.component.html',
    styleUrls: ['live-chat.component.scss']
})
export class LiveChatComponent implements OnInit, AfterViewChecked {
    public messageTypeEnumRef: typeof MessageTypeEnum;
    public chatMessages: MessageDTO[];
    public sendMessageIcon: IconDefinition;

    @ViewChild('messagesContainer')
    private _messagesContainer: ElementRef;
    private _liveChatService: LiveChatService;

    constructor(liveChatService: LiveChatService){
        this.chatMessages = [];
        this.messageTypeEnumRef = MessageTypeEnum;
        this._liveChatService = liveChatService;
        this.sendMessageIcon = faArrowAltCircleRight;
    }

    public ngAfterViewChecked(): void {
        if (this._messagesContainer && this.chatMessages.length > 0){
            this.scrollPageToBottom()
        }
    }

    public ngOnInit(): void {
        localStorage.setItem('userName', 'Alef');

        this._liveChatService.initializeNewUserConnection();
        this._liveChatService.newMessageReceivedEvent.subscribe((newMessage: MessageDTO) => {
            this.chatMessages.push(newMessage);
        });
    }

    public sendNewMessage(messageInput: HTMLInputElement): void {
        const messageContent = messageInput.value;
        const currentUserName = this._liveChatService.CurrentUserName;
        const newMessage = new MessageDTO(currentUserName, messageContent, MessageTypeEnum.CurrentUserMessage);
        this.chatMessages.push(newMessage);
        this._liveChatService.sendNewMessage(messageContent);
        messageInput.value = '';
    }

    private scrollPageToBottom(): void {
        this._messagesContainer.nativeElement.scrollTop =
        this._messagesContainer.nativeElement.scrollHeight;
    }
}
