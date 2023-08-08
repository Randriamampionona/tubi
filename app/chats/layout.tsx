import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat',
}

const ChatsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main className='flex h-[calc(100vh-3.5rem)] w-full'>
      <Sidebar />
      {children}
    </main>
  )
}

export default ChatsLayout