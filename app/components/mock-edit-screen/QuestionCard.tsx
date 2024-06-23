import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react"
import { MathJax } from "better-react-mathjax"

const defaultQuestion = "Let \\( \\mathcal{T} \\) be a topological space, a basis is defined as \\[\\mathcal{ B } = \\{ B_{ \\alpha } \\in \\mathcal{ T }\\, |\\, U = \\bigcup B_{ \\alpha } \\forall U \\in \\mathcal{ T } \\}\\]"
export default function QuestionCard(props: {
    question: string,
    questionID : string
}) {
    return (
        <div className = "my-0.5">
            <Card className ="p-1" shadow="sm">
                <div className = "p-2 flex">
                        <p className="text-sm font-bold">[Question No]</p>
                        <p className="text-tiny mt-0.5 mx-1 text-gray-400">[#1156pf-adi09-999-pxml734-qID]{ props.questionID }</p>
                </div>
                <div className = "px-2 pb-2">
                    <MathJax className="text-tiny">
                        {defaultQuestion}
                        {/* {props.question} */}

                    </MathJax>
                </div>
            </Card>
        </div>
    )
}