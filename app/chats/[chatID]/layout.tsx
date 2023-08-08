import Chatbar from '@/components/Chatbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chat with Bob',
}

export default function ShopLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: {
		chatID: string
	}
}) {
	return (
		<main className='flex h-[calc(100vh-3.5rem)] w-full'>
			{children}
			<Chatbar chatID={params.chatID} />
		</main>
	)
}