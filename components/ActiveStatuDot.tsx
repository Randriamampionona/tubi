type Props = {
    style?: string
}

const ActiveStatuDot = ({ style = "bottom-[-2px] right-0 z-10 w-4 h-4" }: Props) => {
    return (
        <div className={`absolute rounded-full bg-emerald-500 border-2 border-zinc-900 group-hover:border-zinc-800 ${style}`} />
    )
}

export default ActiveStatuDot