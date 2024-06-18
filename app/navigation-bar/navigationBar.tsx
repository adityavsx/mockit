import QuestionTypeCard from "./QuestionTypeCard"
import MocksCard from "./MocksCard"
export default function NavigationBar() {
    return (
        <div className= "bg-navbar-background-light flex w-72 min-h-screen place-content-center">
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