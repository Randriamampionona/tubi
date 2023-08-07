import ChatSetting from "./ChatSetting"
import MiniProfile from "./MiniProfile"

type Props = {
	chatID: string
}

export const revalidate = 60

const getProfile = async (chatID: string): Promise<ChatResponse> => {
	const fetchData = await fetch(`${process.env.NEXT_BASE_URL}/api/chats/${chatID}`)
	const res: Promise<ChatResponse> = fetchData.json()
	return res
}

const Chatbar = async ({ chatID }: Props) => {

	const res = await getProfile(chatID)

	return (
		<aside className="bg-zinc-900 max-w-xs w-full h-full border-l border-zinc-800 overflow-y-auto">
			<MiniProfile user={res.chat.users[1]} />
			<ChatSetting />
		</aside>
	)
}

export default Chatbar
