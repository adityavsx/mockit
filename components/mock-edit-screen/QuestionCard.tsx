import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react"
import { MathJax } from "better-react-mathjax"

const defaultQuestion = "Let \\( \\mathcal{T} \\) be a topological space, a basis is defined as \\[\\mathcal{ B } = \\{ B_{ \\alpha } \\in \\mathcal{ T }\\, |\\, U = \\bigcup B_{ \\alpha } \\forall U \\in \\mathcal{ T } \\}\\]"
export default function QuestionCard(props: {
    question: string,
    questionID: string
}) {
    return (
        <div>
            <div className="my-2">
                <Card className="p-1 bg-section-item-background" shadow="sm">
                    <div className="p-2 flex ">
                        <p className="text-sm font-bold">Question</p>
                        <p className="text-tiny mt-0.5 mx-1 text-gray-400">#1156pf-adi09-999-pxml734-qID{props.questionID}</p>
                    </div>
                    <div>
                        <MathJax className="text-tiny p-2">
                            {defaultQuestion}
                        </MathJax>
                    </div>
                </Card>
            </div>
        </div>
    )
}