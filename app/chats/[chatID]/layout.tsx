import Chatbar from '@/components/Chatbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chat with Bob',
}

type Props = {
	children: React.ReactNode,
	params: {
		chatID: string
	}
}
const ChatLayout = ({ children, params: { chatID } }: Props) => {
	return (
		<main className='flex h-[calc(100vh-3.5rem)] w-full'>
			{children}
			<Chatbar chatID={chatID} />
		</main>
	)
}

export default ChatLayout