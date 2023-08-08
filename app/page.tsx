import Link from "next/link"

const Home = () => {
  return (
    <div className="flex items-end justify-center">
      <h1 className="text-center mt-48">Welcome to Tubi v1.0.0, <u>go to <Link href={"/chats"}>Chats</Link></u></h1>
    </div>
  )
}

export default Home