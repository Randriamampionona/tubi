"use client";

import { FiMoreVertical } from "react-icons/fi"
import { useState } from "react";

type Props = {
    message: Message
}

const MessageOptions = ({ message }: Props) => {
    const [showOption, setShowOption] = useState(false)

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
        setShowOption(false)
    }

    return (
        <>
            {!showOption ? (
                <span className={`absolute top-0 text-zinc-400 hover:text-zinc-50 ${message.sender.uid === "2" ? "!-left-5" : "!-right-5"}`} onClick={_ => setShowOption(prev => !prev)}><FiMoreVertical /></span>
            ) : (<div className={`absolute top-0 rounded z-20 bg-zinc-950 shadow-zeroFiveBlackShadow ${message.sender.uid === "2" ? "!-left-[90px]" : "!-right-[90px]"}`} onMouseLeave={_ => setShowOption(false)}>
                <p className="px-3 py-1 cursor-pointer select-none hover:text-zinc-400" onClick={copyHandler}>Copy</p>
                <p className="px-3 py-1 cursor-pointer select-none hover:text-zinc-400" onClick={removeHandler}>Remove</p>
                <p className="px-3 py-1 cursor-pointer select-none hover:text-zinc-400" onClick={replyHandler}>Reply</p>
            </div>)}
        </>
    )
}

export default MessageOptions