export class LiveChatService {


    public setUserName(name: string): void {
        localStorage.setItem('username', name);
    }
}
