import { Button } from "@nextui-org/button";
import SectionList from "./SectionList"
import { Divider } from "@nextui-org/divider";
export default function NavBar() {
    return (
        <div className="flex min-h-screen">
            <div className="bg-navbar-background-light flex place-content-center select-none overflow-y-hidden hover:overflow-auto max-h-screen scrollbar pl-24  pr-2">
                <ul >
                    <SectionList />
                </ul>
            </div>
            <Divider orientation="vertical" />
        </div>
    )
}