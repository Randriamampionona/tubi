type Props = {
  icon: JSX.Element,
}

const IconBtn = ({ icon }: Props) => {
  return (
    <div className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-50 cursor-pointer">
      {icon}
    </div>
  )
}

export default IconBtn
