import * as signalR from '@microsoft/signalr';
import { EventEmitter } from '@angular/core';
import { MessageTypeEnum } from '../views/live-chat/Enums/MessageTypeEnum';
import { MessageDTO } from './../views/live-chat/DTO/MessageDTO';

export class LiveChatService {

    public onConnectionSuccessfully: EventEmitter<void>;
    public newMessageReceivedEvent: EventEmitter<MessageDTO>;
    public userEnteredEvent: EventEmitter<MessageDTO>;
    public userExitEvent: EventEmitter<MessageDTO>;

    private _hubConnection: signalR.HubConnection;
    private _currentUserName: string;

    constructor() {
        this.newMessageReceivedEvent = new EventEmitter<MessageDTO>();
        this.userEnteredEvent = new EventEmitter<MessageDTO>();
        this.userExitEvent = new EventEmitter<MessageDTO>();
        this.onConnectionSuccessfully = new EventEmitter();
        this._currentUserName = '';
    }

    public get CurrentUserName(): string {
        return this._currentUserName;
    }

    public initializeNewUserConnectionAsync(userName: string): Promise<void> {
        this._currentUserName = userName;
        this._hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl('https://localhost:5001/liveChatHub')
                                .build();

        this.assignNewMessageReceived();
        this.assignOnUserEnterChatAsync();
        this.assignOnUserExitChatAsync();

        return this._hubConnection.start().then(() => {
            this.onConnectionSuccessfully.emit();
            this._hubConnection.send('OnEnterChatAsync', this.CurrentUserName);
        });
    }

    public leaveChatAsync(): Promise<void> {
        return this._hubConnection.send('OnExitChatAsync', this.CurrentUserName)
                .then(() => {
                    this._hubConnection.stop();
                });
    }

    public sendNewMessage(message: string): void{
        this._hubConnection.send('OnNewMessageAsync', this.CurrentUserName, message);
    }

    public setUserName(name: string): void {
        localStorage.setItem('username', name);
    }

    private assignNewMessageReceived(): void {
        this._hubConnection.on('OnNewMessageAsync', (userName: string, messageContent: string) => {
            const newMessage = new MessageDTO(userName, messageContent, MessageTypeEnum.OtherUser);
            this.newMessageReceivedEvent.emit(newMessage);
        });
    }

    private assignOnUserEnterChatAsync(): void {
        this._hubConnection.on('OnEnterChatAsync', (userName: string) => {
            const newMessage = new MessageDTO(userName, `${userName} ingressou no chat`, MessageTypeEnum.ChatActions);
            this.newMessageReceivedEvent.emit(newMessage);
        });
    }

    private assignOnUserExitChatAsync(): void {
        this._hubConnection.on('OnExitChatAsync', (userName: string) => {
            const newMessage = new MessageDTO(userName, `${userName} saiu do chat`, MessageTypeEnum.ChatActions);
            this.newMessageReceivedEvent.emit(newMessage);
        });
    }
}
