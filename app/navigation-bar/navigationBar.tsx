import SectionList from "./SectionList"
export default function NavigationBar() {
    return (
         <div className= "bg-navbar-background-light flex w-96 place-content-center select-none overflow-y-hidden hover:overflow-auto min-h-screen max-h-screen scrollbar pl-24">
            <header>
                <h1 className= "text-2xl text-black underline m-10 font-bold">
                </h1>
                <ul>
                    <SectionList/>
                </ul>
            </header>
        </div>
    )
}