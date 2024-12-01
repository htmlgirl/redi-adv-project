import React from "react";
import {useRouter} from "next/router";
import useMovie from "@/hooks/useMovie";
import {AiOutlineArrowLeft} from "react-icons/ai";

const Watch = () => {
    const router = useRouter();
    const {movieId}= router.query;
    const {data} = useMovie(movieId as string);

    return (
        <div className="h-screen w-screen bg-zinc-900">
            <nav className="flex-row flex items-center fixed w-full p-4 z-10 gap-8 bg-slate-900/70">
                <AiOutlineArrowLeft onClick={() => router.push('/')} size={40} className={"text-white"} />
                <p className={"text-xl font-bold text-white mb-8"}>
                    <span className="text-xl font-bold text-white mb-8">
                        Watshing:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video autoPlay controls className={"h-full w-full"} src={data?.videoUrl}></video>

        </div>
    )
}

export default Watch;
