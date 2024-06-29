'use client'
import spaceship from "C:/Users/adi/temp/learning-nextjs/assets/spaceship.jpg"

export default function NotFound404() {
    return (
        <div className="bg-[#000640] border-1 border-black flex items-center justify-center h-[90vh]"
            style={{
                backgroundImage: `url("https://i.ytimg.com/vi/nFHUVXJp8Y4/maxresdefault.jpg")`
            }}
        >
            <div className="flex-col items-center ">
                <h2 className="text-slate-500 font-bold text-lg w-1/2">I 👀 you</h2>
                <h1 className="text-4xl font-bold text-white">Error,this page could not be found</h1>
                <h2 className="text-slate-400 font-bold text-xl p-1 w-1/2">
                    Looks like you're trying to access something that you should'nt. Smartie Pants?
                </h2>
            </div>
        </div>
    )
}