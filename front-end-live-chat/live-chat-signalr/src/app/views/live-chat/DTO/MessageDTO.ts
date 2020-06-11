import { MessageTypeEnum } from '../Enums/MessageTypeEnum';

export class MessageDTO {
    public userName: string;
    public content: string;
    public messageType: MessageTypeEnum;
}
