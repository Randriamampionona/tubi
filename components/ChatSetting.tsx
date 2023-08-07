"use client";

import { useState } from "react";
import { FaThemeco, FaThumbsUp, FaImages, FaLink } from "react-icons/fa"
import { FiAlertTriangle } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

const ChatSetting = () => {
    const [toogle, setToogle] = useState<{ [key: string]: boolean }>({
        customize: false,
        media: false,
        pravacy: false,
    })

    const toogleHandler = (s: string) => {
        setToogle((prev) => ({
            ...prev,
            [s]: !(prev?.[s])
        }))
    }

    return (
        <div className="w-full p-3 select-none">
            <details className="py-3" onClick={() => toogleHandler("customize")}>
                <summary className="flex items-center justify-between w-full relative font-medium cursor-pointer" >
                    <h2>Customize chat</h2>
                    <span className="text-zinc-400">{toogle.customize ? <BsChevronDown /> : <BsChevronUp />}</span>
                </summary>
                <div>
                    <div className="flex items-center space-x-3 py-2 cursor-pointer">
                        <FaThemeco className="w-5 h-5" />
                        <p>Change theme</p>
                    </div>
                    <div className="flex items-center space-x-3 py-2 cursor-pointer">
                        <FaThumbsUp className="w-5 h-5" />
                        <p>Change emoji</p>
                    </div>
                </div>
            </details>

            <details className="py-3" onClick={() => toogleHandler("media")}>
                <summary className="flex items-center justify-between w-full relative font-medium cursor-pointer" >
                    <h2>Media, files and links</h2>
                    <span className="text-zinc-400">{toogle.media ? <BsChevronDown /> : <BsChevronUp />}</span>
                </summary>
                <div>
                    <div className="flex items-center space-x-3 py-2 cursor-pointer">
                        <FaImages className="w-5 h-5" />
                        <p>Media</p>
                    </div>
                    <div className="flex items-center space-x-3 py-2 cursor-pointer">
                        <FaLink className="w-5 h-5" />
                        <p>Links</p>
                    </div>
                </div>
            </details>

            <details className="py-3" onClick={() => toogleHandler("pravacy")}>
                <summary className="flex items-center justify-between w-full relative font-medium cursor-pointer" >
                    <h2>Pravacy & support</h2>
                    <span className="text-zinc-400">{toogle.pravacy ? <BsChevronDown /> : <BsChevronUp />}</span>
                </summary>
                <div>
                    <div className="flex items-center space-x-3 py-2 cursor-pointer">
                        <FiAlertTriangle className="w-5 h-5 text-[#FF9800]" />
                        <p title="Give feedback and report conversation">Report</p>
                    </div>
                </div>
            </details>
        </div>
    )
}


export default ChatSetting