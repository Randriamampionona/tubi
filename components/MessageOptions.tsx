"use client";

import { FiMoreVertical, FiSmile } from "react-icons/fi"
import { BiSolidShare } from "react-icons/bi"
import { useState } from "react";

type Props = {
    message: Message
}

const MessageOptions = ({ message }: Props) => {
    const [showOption, setShowOption] = useState(false)

    const toogleOption = () => {
        setShowOption(prev => !prev)
    }

    const copyHandler = () => {
        window.navigator.clipboard.writeText(message.text || "")
        setShowOption(false)
    }

    const removeHandler = () => {
        if (confirm("Remove for everyone?")) {
            // ramove message
        }
        setShowOption(false)
    }

    const replyHandler = () => {
        // handle reply
    }

    return (
        <>
            {
                showOption
                    ? (
                        <div className={`absolute top-0 w-fit bg-zinc-950 shadow-zeroBlackShadow rounded ${message.sender.uid === "2" ? "left-[calc(-80px-.5rem)]" : "left-[calc(100%+.5rem)]"}`} onMouseLeave={_ => setShowOption(false)}>
                            <p className="px-3 py-1 cursor-pointer select-none hover:text-zinc-400" onClick={copyHandler}>Copy</p>
                            <p className="px-3 py-1 cursor-pointer select-none hover:text-zinc-400" onClick={removeHandler}>Remove</p>
                        </div>
                    )

                    : (
                        <div className={`relative hidden group-hover:flex items-center ${message.sender.uid === "2" ? "flex-row-reverse" : "flex-row"}`}>
                            <span className="text-zinc-400 hover:text-zinc-50 mx-1" onClick={toogleOption}><FiMoreVertical /></span>
                            <span className="text-zinc-400 hover:text-zinc-50 mx-1" onClick={replyHandler}><BiSolidShare /></span>
                            <span className="text-zinc-400 hover:text-zinc-50 mx-1"><FiSmile /></span>
                        </div>
                    )
            }

        </>
    )
}

export default MessageOptions