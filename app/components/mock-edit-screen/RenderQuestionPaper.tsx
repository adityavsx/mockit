import { MathJaxContext } from "better-react-mathjax";
import QuestionCard from "./QuestionCard";

export default function RenderedQuestionPaper() {
    return (
        <MathJaxContext>
        <div className="container m-1 p-1">
            <div className="font-bold">
                Rendered Question Paper
            </div>
            <div className="p-4 rounded border-1 border-gray-400 border-dashed h-[75vh] overflow-y-hidden hover:overflow-auto max-h-screen scrollbar">
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
                <QuestionCard question="" options={new Array<string>} />
            </div>
            </div>
        </MathJaxContext>
    )
}