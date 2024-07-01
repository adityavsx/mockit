'use client'
import { MockItLogo } from "@/assets/mockitlogo";
import UserAvatar from "./UserAvatar";
import RedirectTabs from "./RedirectTabs";

export default function Header() {
    return (
        <div className="w-full h-24 justify-center items-center flex bg-background-color border-b-2 border-divider">
            <div className="w-1/3">
                <RedirectTabs />
            </div>
            <div className="w-1/3 flex items-center justify-end pr-6">
                <UserAvatar/>
            </div>
        </div>
    )
}
