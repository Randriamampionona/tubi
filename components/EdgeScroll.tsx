"use client";

import { useParams } from "next/navigation";
import { useRef, useEffect } from "react"

const EdgeScroll = () => {
    const edgeRef = useRef<HTMLDivElement | null>(null)
    const params = useParams()

    useEffect(() => {
        edgeRef.current?.scrollIntoView({
            behavior: "smooth",
        })
    }, [params?.chatID])

    return (
        <div ref={edgeRef} className="w-full h-0" />
    )
}

export default EdgeScroll