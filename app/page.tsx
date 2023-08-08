import Link from "next/link"

const Home = () => {
  return (
    <div className="flex items-end justify-center h-full">
      <h1 className="text-center">Welcome to Tubi, <u>go to <Link href={"/chats"}>Chats</Link></u></h1>
    </div>
  )
}

export default Home