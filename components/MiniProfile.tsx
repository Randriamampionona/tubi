import Image from "next/image"
import ActiveStatuDot from "./ActiveStatuDot"
import MiniProfileIconBtn from "./MiniProfileIconBtn"

type Props = {
    user: User
}

const MiniProfile = ({ user }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 w-full h-auto p-3">
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-20 h-20 rounded-full bg-zinc-800 my-4">
                    <Image
                        src={user.photoURL}
                        alt={user.displayname}
                        width={80}
                        height={80}
                        priority={true}
                        className="!object-cover rounded-full"
                    />
                    <ActiveStatuDot style={"w-[1.2rem] h-[1.2rem] right-[2px] bottom-[2px]"} />
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="font-bold w-fit">{user.displayname}</h1>
                    <span className="text-xs text-zinc-400">Active 30m ago</span>
                </div>
            </div>

            <MiniProfileIconBtn uid={user.uid} />
        </div>
    )
}

export default MiniProfile