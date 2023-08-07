import Link from "next/link"

const Home = () => {
  return (
    <p>
      <li><Link href={"/"}>home</Link></li>
      <li><Link href={"/chats"}>Chats</Link></li>
      <li><Link href={"/chats/2sfd8g4gs1dz51"}>Chat</Link></li>
    </p>
  )
}

export default Home