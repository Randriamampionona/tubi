"use client";

import Image from "next/image"
import { FaTimes } from "react-icons/fa"
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Props = {
    media: File;
    resetMedia: Dispatch<SetStateAction<{
        file: File | null;
        message: string;
    }>>
}

const MediaInputPreview = ({ media, resetMedia }: Props) => {
    const [src, setSrc] = useState("")

    useEffect(() => {
        const reader = new FileReader();

        reader.readAsDataURL(media);

        reader.onloadend = (e: ProgressEvent<FileReader>) => {
            setSrc(e.target?.result as string);
        };

    }, [media])

    const clickHandler = () => {
        media && resetMedia(prev => ({
            ...prev,
            file: null
        }))
    }

    if (!src) return null

    return (
        <div className="flex items-center justify-end px-4 py-2">
            <div className="relative">
                <Image src={src} alt={media.name} width={100} height={100} className="rounded-md cursor-pointer hover:brightness-95" />
                <span className="absolute -top-[10px] -right-[10px] z-10 rounded-full p-[5px] bg-zinc-800 text-zinc-400 hover:bg-red-500 hover:text-zinc-50" onClick={clickHandler}><FaTimes /></span>
            </div>
        </div>
    )
}

export default MediaInputPreview