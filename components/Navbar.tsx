import Link from "next/link"
import Dropdown from "./Dropdown"
import GlobalSearch from "./GlobalSearch"
import Lang from "./Lang"
import Notification from "./Notification"

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between min-w-full w-full h-14 bg-zinc-900 px-6 border-b border-zinc-800">
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <h1 className="text-emerald-500 text-[2rem] font-extrabold font-poppins cursor-pointer select-none">Tub!</h1>
          </Link>
          <GlobalSearch />
        </div>

        <div className="flex items-center space-x-4">
            <Lang />
            <Notification />
            <Dropdown />
        </div>
    </nav>
  )
}

export default Navbar
