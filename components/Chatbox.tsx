import { MESSAGES_DATA } from "@/data"
import Message from "./Message"
import EdgeScroll from "./EdgeScroll"

const Chatbox = () => {
    return (
        <div className="flex-grow p-4 space-y-3 overflow-y-auto">
            {
                MESSAGES_DATA.map(message => <Message key={message.messageID} message={message} />)
            }
            <EdgeScroll />
        </div>
    )
}

export default Chatbox