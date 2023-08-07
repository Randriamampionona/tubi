import IconBtn from "./IconBtn"
import { FaCog, FaCamera } from "react-icons/fa"
import ChatSearch from "./ChatSearch"
import ChatList from "./ChatList"

const Sidebar = () => {
	return (
		<aside className="flex flex-col bg-zinc-900 max-w-xs w-full h-full border-r border-zinc-800 overflow-y-auto">
			<header className="pt-3 space-y-3 h-[6.5rem]">
				{/* sidebar header */}
				<div className="flex items-center justify-between w-full px-3">
					<h1 className="text-xl font-bold">Chats</h1>

					<div className="flex items-center justify-end space-x-2">
						<IconBtn icon={<FaCamera />} />
						<IconBtn icon={<FaCog />} />
					</div>
				</div>

				{/* chat search */}
				<div className="w-full px-3">
					<ChatSearch />
				</div>
			</header>

			{/* chat list */}
			<div className="flex-grow w-full h-[calc(100%-6.5rem)] py-2">
				<ChatList />
			</div>
		</aside>
	)
}

export default Sidebar
