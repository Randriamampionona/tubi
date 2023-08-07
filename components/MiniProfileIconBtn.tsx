"use client";

import { FaUserAlt, FaBell, FaRss } from "react-icons/fa"
import IconBtn from "./IconBtn";

type Props = {
    uid: string
}

const MiniProfileIconBtn = ({ uid }: Props) => {
    return (
        <div className="flex items-center space-x-6 mt-2">
            <div className="flex flex-col items-center justify-center space-y-1">
                <IconBtn icon={<FaUserAlt />} />
                <p className="text-clip text-sm" title={uid}>Profile</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
                <IconBtn icon={<FaBell />} />
                <p className="text-clip text-sm">Mute</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
                <IconBtn icon={<FaRss />} />
                <p className="text-clip text-sm">Follow</p>
            </div>
        </div>
    )
}


export default MiniProfileIconBtn