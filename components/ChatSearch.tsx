import { FaSearch } from "react-icons/fa"

const ChatSearch = () => {
  return (
    <form className="flex items-center bg-zinc-800 rounded-full w-full p-2 md:px-4">
      <FaSearch className="text-zinc-500" />
      <input className="hidden md:block flex-grow bg-transparent outline-none border-0 text-zinc-50 px-2 placeholder:text-zinc-500" type="search" name="search" placeholder="Search chats" />
    </form>
  )
}

export default ChatSearch
