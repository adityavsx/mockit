import QuestionTypeCard from "./QuestionTypeCard"
import MocksCard from "./MocksCard"
export default function NavigationBar() {
    return (
         <div className= "bg-navbar-background-light flex w-72 place-content-center select-none overflow-y-hidden hover:overflow-auto min-h-screen max-h-screen scrollbar">
            <header>
                <h1 className= "text-2xl text-black underline m-10 font-bold">
                    Navigations
                </h1>
                <ul>
                    <QuestionTypeCard/>
                    <MocksCard />
                </ul>
            </header>
        </div>
    )
}