import { FaSearch } from "react-icons/fa"

const GlobalSearch = () => {
  return (
    <form className="flex items-center bg-zinc-800 rounded-full max-w-xs w-full px-3 py-3 md:px-4 md:py-2">
      <FaSearch className="text-zinc-500" />
      <input className="hidden md:block flex-grow bg-transparent outline-none border-0 text-zinc-50 px-2 placeholder:text-zinc-500" type="search" name="search" placeholder="Search something..." />
    </form>
  )
}

export default GlobalSearch
