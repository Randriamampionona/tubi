const messageReaction = ["💝", "😂", "😮", "😥", "😡", "👌"]

const MessageReaction = () => {
    return (
        <div className="hidden space-x-1 rounded-full p-1 my-1 bg-zinc-900 group-hover:flex">
            {
                messageReaction.map((reaction, i) => (
                    <p key={i} className="transition-all ease-out text-base cursor-default hover:scale-110">{reaction}</p>
                ))
            }
        </div>
    )
}

export default MessageReaction