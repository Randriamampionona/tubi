import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Tubi',
  description: 'Chat app by tooj rtn',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='bg-zinc-950 text-zinc-50 h-screen'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout