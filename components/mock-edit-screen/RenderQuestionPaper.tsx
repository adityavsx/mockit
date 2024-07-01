import { MathJaxContext } from "better-react-mathjax";
import QuestionCard from "./QuestionCard";
import Empty from "@/ui/EmptyBox";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function RenderedQuestionPaper() {
    return (
        <MathJaxContext>
                <div className="h-[85vh] overflow-scroll">
                        <div className= "p-4 border-l-2 border-divider">
                            <QuestionCard question="Some question must be put here" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID="" />
                        </div>
                </div>
        </MathJaxContext>
    )
}