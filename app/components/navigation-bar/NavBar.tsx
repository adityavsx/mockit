import SectionList from "./SectionList"
import { Divider } from "@nextui-org/divider";
export default function NavBar() {
    return (
        <div className="flex min-h-screen">
            <div className="container my-4 flex">
                <div className= "bg-navbar-background-light flex w-96 place-content-center select-none overflow-y-hidden hover:overflow-auto max-h-screen scrollbar pl-24">
                        <ul>
                            <SectionList />
                        </ul>
                </div>
                    <Divider orientation="vertical" />
            </div>
        </div>
    )
}