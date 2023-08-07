type User = {
    uid: string;
    email: string;
    displayname: string;
    photoURL: string;
}

type Chat = {
    chatID: string;
    users: [User, User];
    lastMessage: {
        from: string;
        text: string;
        timestampe: string;
    };
}

type Message = {
    messageID: string;
    sender: User;
    text?: string;
    media?: string;
    timestamp: string;
}

type MessagesResponse = {
    success?: boolean;
    error?: string;
    user: Message[]
}

type UserResponse = {
    success?: boolean;
    error?: string;
    user: User
}

type ChatListResponse = {
    success?: boolean;
    error?: string;
    chats: Chat[]
}

type ChatResponse = {
    success?: boolean;
    error?: string;
    chat: Chat
}

type UserListResponse = {
    success?: boolean;
    error?: string;
    users: User[]
}