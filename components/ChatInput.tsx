"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa"
import { LuImagePlus, LuThumbsUp, LuSmilePlus } from "react-icons/lu"
import MediaInputPreview from "./MediaInputPreview";

const initState: {
    file: File | null;
    message: string;
} = {
    file: null,
    message: ""
}

const ChatInput = () => {
    const [inputs, setinputs] = useState(initState)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setinputs(prev => ({
            ...prev,
            [e.target.name]: e.target.name === "file"
                ? e.target.files?.[0]
                : e.target.value
        }))
    }

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!inputs.file && !inputs.message.trim()) return

        const maxSize = 10000000;

        if (inputs.file && inputs.file.size > maxSize) {
            alert("File too large. (file > 10Mb)")
            return setinputs(initState)
        }

        // call API to send message

        console.log(inputs)

        setinputs(initState)
    }

    return (
        <div className={`w-full ${inputs.file ? "shadow-inputShadow" : ""}`}>
            {inputs.file && <MediaInputPreview media={inputs.file} resetMedia={setinputs} />}

            <form className="grid grid-cols-[auto,1fr,auto] gap-x-2 px-4 py-2 w-full" onSubmit={submitHandler}>
                <div className="flex">
                    <label htmlFor="file" className="flex items-center">
                        <span className="p-2 cursor-pointer hover:text-emerald-500"><LuImagePlus size={20} /></span>
                        <input type="file" name="file" id="file" accept=".png, .jpg, .jpeg, .gif" className="hidden" onChange={changeHandler} />
                    </label>
                    <div className="flex items-center">
                        <span className="text-[20px] p-2 cursor-pointer hover:text-emerald-500"><LuSmilePlus size={20} /></span>
                    </div>
                </div>
                <div className="flex flex-grow items-center bg-zinc-900 rounded p-2 space-x-2">
                    <input type="text" name="message" placeholder="Write your message..." autoFocus={true} className="flex-grow bg-transparent outline-0 border-0 text-zinc-50 placeholder:text-zinc-500" value={inputs.message} onChange={changeHandler} />
                    <button type="submit" disabled={!inputs.file && !inputs.message.trim()} className="outline-none border-0 bg-transparent disabled:cursor-not-allowed"><span className={`${!!inputs.file || !!inputs.message.trim() ? "text-emerald-500" : "text-zinc-800"}`}><FaPaperPlane /></span></button>
                </div>
                <div className="flex items-center">
                    <span className="text-[20px] p-2 cursor-pointer hover:text-emerald-500"><LuThumbsUp size={20} /></span>
                </div>
            </form>
        </div>
    )
}

export default ChatInput