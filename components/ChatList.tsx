import Chat from "./Chat"


const getChatList = async (): Promise<ChatListResponse> => {

    const getData = await fetch(`${process.env.NEXT_BASE_URL}/api/chats`)
    const res: Promise<ChatListResponse> = await getData.json()

    return res
}

const ChatList = async () => {

    const chatList = await getChatList()

    return (
        <div className="w-full h-full overflow-hidden overflow-y-auto">
            {
                chatList.chats.map(chat => <Chat key={chat.chatID} chat={chat} />)
            }
        </div>
    )
}

export default ChatList