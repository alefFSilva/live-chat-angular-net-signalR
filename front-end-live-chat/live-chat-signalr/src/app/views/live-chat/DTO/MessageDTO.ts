import { MessageTypeEnum } from '../Enums/MessageTypeEnum';

export class MessageDTO {
    public userName: string;
    public content: string;
    public type: MessageTypeEnum;

    constructor(userName: string, content: string, type: MessageTypeEnum) {
        this.userName = userName;
        this.content = content;
        this.type = type;
    }
}
