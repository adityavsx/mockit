import { MathJaxContext } from "better-react-mathjax";
import QuestionCard from "./QuestionCard";
import Empty from "@/app/ui/EmptyBox";
import { useSelector } from "react-redux";

export default function RenderedQuestionPaper() {
    const isSectionSelected = useSelector((state : any )=> state.sectionAction.selectedSection)
    return (
        <MathJaxContext>
        <div className="container m-1 p-1">
            <div className="font-bold">
                Rendered Question Paper
            </div>
                <div className="h-[75vh]">
                    <Empty content="No Question Paper to Render" isEmpty={isSectionSelected === '[select section]'}>
                        <div className= "p-4 rounded border-1 border-gray-400 border-dashed overflow-y-hidden hover:overflow-auto max-h-screen scrollbar">
                            <QuestionCard question="Some question must be put here" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID=""/>
                            <QuestionCard question="" questionID="" />
                        </div>
                    </Empty>
                </div>
            </div>
        </MathJaxContext>
    )
}