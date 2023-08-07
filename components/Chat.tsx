import { truncatedText } from "@/utils/truncatedText"
import Image from "next/image"
import ActiveStatuDot from "./ActiveStatuDot"
import Link from "next/link"

type Props = {
    chat: Chat
}

const Chat = ({ chat: { chatID, lastMessage, users } }: Props) => {
    return (
        <Link href={`/chats/${chatID}`} title={users[0].displayname}>
            <div className="group grid grid-cols-[3rem,1fr] space-x-3 p-3 cursor-pointer hover:bg-zinc-700">
                <div className="relative grid place-content-center w-12 h-12 rounded-full bg-zinc-800">
                    <Image
                        src={users[0].photoURL}
                        alt={users[0].displayname}
                        width={48}
                        height={48}

                        className="!object-cover rounded-full"
                    />
                    <ActiveStatuDot />
                </div>

                <div className="w-full">
                    <h1 className="font-bold w-fit">{users[0].displayname}</h1>
                    <p className="truncate text-zinc-400 text-sm select-none">{truncatedText(lastMessage.text)} <span className="ml-2">{lastMessage.timestampe}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default Chat