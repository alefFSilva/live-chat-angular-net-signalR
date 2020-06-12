import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LiveChatService } from './../../services/live-chat-service';
import { MessageDTO } from './DTO/MessageDTO';
import { MessageTypeEnum } from './Enums/MessageTypeEnum';
import { timingSafeEqual } from 'crypto';

@Component({
    selector: 'live-chat',
    templateUrl: 'live-chat.component.html',
    styleUrls: ['live-chat.component.scss']
})
export class LiveChatComponent implements OnInit, AfterViewChecked {
    public messageTypeEnumRef: typeof MessageTypeEnum;
    public chatMessages: MessageDTO[];
    public sendMessageIcon: IconDefinition;
    public leaveChatIcon: IconDefinition;
    public liveChatOn: boolean;

    @ViewChild('messagesContainer')
    private _messagesContainer: ElementRef;
    private _liveChatService: LiveChatService;
    private _router: Router;
    private _activatedRoute: ActivatedRoute;

    constructor(liveChatService: LiveChatService, router: Router, route: ActivatedRoute){
        this.chatMessages = [];
        this.messageTypeEnumRef = MessageTypeEnum;
        this._activatedRoute = route;
        this._liveChatService = liveChatService;
        this._router = router;
        this.liveChatOn = false;
        this.sendMessageIcon = faArrowAltCircleRight;
        this.leaveChatIcon = faSignOutAlt;
    }

    public ngAfterViewChecked(): void {
        if (this._messagesContainer && this.chatMessages.length > 0){
            this.scrollPageToBottom()
        }
    }

    public ngOnInit(): void {
        this._activatedRoute.queryParams.subscribe((params: Params) => {
            const userName = params['userName'];
            this._liveChatService.initializeNewUserConnectionAsync(userName)
                .then(() => {
                    this.liveChatOn = true;
                });
        });

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

    public leaveChatAsync(): void {
        this._liveChatService.leaveChatAsync()
        .then(() => {
            this.liveChatOn = false;
            this._router.navigate(['']);
        });
    }

    private scrollPageToBottom(): void {
        this._messagesContainer.nativeElement.scrollTop =
        this._messagesContainer.nativeElement.scrollHeight;
    }
}
