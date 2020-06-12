
## Live Chat usando Angular 9 + ASP .NET Core 3.1  + SignalR

[DEMO](https://live-chat-angular-signalr.herokuapp.com/)

Este é um projeto de live chat desenvolvido com Angular 9, ASP .NET Core 3.1 e SignalR.

![enter image description here](https://i.imgur.com/z5zUeoH.png)


![enter image description here](https://i.imgur.com/F2JGeZ0.png)

## SignalR

**SignalR** é uma biblioteca open-source que agiliza o desenvolvimento de aplicações que necessitam de notificações Real-time.  Para isto o SignalR faz a gestão de websockets entre o server e client e entrega ao desevolvedor uma API completa, rápida e fácil de implementar.

## **Rodando o Live chat**

    git clone https://github.com/alefFSilva/live-chat-angular-net-signalR.git

## **Server em ASP .NET Core**

**Requisitos**

 - [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1)

**Rodando Server**
	
Na pasta raiz do repositório(live-chat-angular-net-signalR), execute:
	
    cd live-chat-angular-net-signalR
    cd backend-live-chat
    cd cd LiveChatServer
    
    dotnet restore
    dotnet run

## **Frontend em Angular**

**Requisitos**

 - [Node ](https://nodejs.org/en/download/)
 - [Angular CLI](https://www.npmjs.com/package/@angular/cli)

**Rodando Client**

Na pasta raiz do repositório(live-chat-angular-net-signalR), execute:

	cd front-end-live-chat
	cd live-chat-signalr

	npm install
	ng serve --open
		



