import Image from "next/image"
import MessageOptions from "./MessageOptions"

type Props = {
    message: Message
}

const Message = ({ message }: Props) => {
    return (
        <div className={`max-w-[75%] w-fit h-fit ${message.sender.uid === "2" ? "grid place-self-end ml-auto space-y-1" : ""}`}>
            <div className="group relative">
                <div className={`p-2 rounded space-y-2 ${message.sender.uid === "2" ? "bg-emerald-500 !rounded-br-[0]" : "bg-zinc-900 !rounded-bl-[0]"}`}>
                    {message.text && <p className="text-zinc-50">{message.text}</p>}
                    {message.media && (
                        <div className="rounded overflow-hidden">
                            <Image src={message.media} quality={100} alt={message.media} width={500} height={500} className="object-contain cursor-pointer hover:brightness-95" />
                        </div>
                    )}

                </div>
                <MessageOptions message={message} />
            </div>
            <span className={`text-xs text-zinc-400 w-full italic select-none cursor-default ${message.sender.uid === "2" ? "text-end" : ""}`}>{message.timestamp}</span>
        </div>
    )
}

export default Message