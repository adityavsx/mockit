import QuestionTypeItem from "./QuestionTypeItem"
export default function NavbarCard() {
    return (
        <div>
            <div className="bg-transparent  font-medium underline w-40 my-2">
                QUESTION TYPES
            </div>
            <ul>
                <QuestionTypeItem name="Multiple Correct Choice" desc="Four choice question out of which one or more may be correct."/>
                <QuestionTypeItem name="Multiple Choice" desc="Four choice question with only one correct option." />
                <QuestionTypeItem name="Integer Type" desc="Input question where only Integers are correct" />
                <QuestionTypeItem name="Numerical Type" desc="Input question where numbers upto two decimal places are correct" />
            </ul>
        </div>
    )
}