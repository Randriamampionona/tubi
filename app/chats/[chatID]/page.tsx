import ChatInput from "@/components/ChatInput"
import Chatbox from "@/components/Chatbox"
import ChatboxHeader from "@/components/ChatboxHeader"

type Props = {
  params: {
    chatID: string
  }
}

const Chat = ({ params: { chatID } }: Props) => {
  return (
    <section className='flex-grow flex flex-col w-full max-h-[calc(100vh-3.5rem)] h-full overflow-hidden'>
      <ChatboxHeader chatID={chatID} />
      <Chatbox />
      <ChatInput />
    </section>
  )
}

export default Chat
