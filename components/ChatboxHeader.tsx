import Image from "next/image"
import { FiMoreVertical } from 'react-icons/fi'
import ActiveStatuDot from "./ActiveStatuDot"
import IconBtn from "./IconBtn"

type Props = {
    chatID: string
}

const getProfile = async (chatID: string): Promise<ChatResponse> => {
    const fetchData = await fetch(`${process.env.NEXT_BASE_URL}/api/chats/${chatID}`)
    const res: Promise<ChatResponse> = fetchData.json()
    return res
}

const ChatboxHeader = async ({ chatID }: Props) => {

    const res = await getProfile(chatID)

    return (
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900">
            <div className="grid grid-cols-[auto,auto] space-x-3">
                <div className="relative grid place-content-center w-10 h-10 rounded-full bg-zinc-800">
                    <Image
                        src={res.chat.users[0].photoURL}
                        alt={res.chat.users[0].displayname}
                        width={40}
                        height={40}
                        priority={true}
                        className="!object-cover rounded-full"
                    />
                    <ActiveStatuDot />
                </div>

                <div className="flex flex-col w-full">
                    <h1 className="font-bold w-fit">{res.chat.users[1].displayname}</h1>
                    <span className="text-xs text-zinc-400">Active 30m ago</span>
                </div>
            </div>

            <IconBtn icon={<FiMoreVertical />} />
        </div>
    )
}

export default ChatboxHeader