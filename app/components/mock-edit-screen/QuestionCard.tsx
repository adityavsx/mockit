import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react"
import { MathJax } from "better-react-mathjax"

export default function QuestionCard(props: {
    question: string,
    options: Array<string>
}) {
    return (
        <div className = "my-0.5">
        <Card className ="p-1" shadow="sm">
            <div className = "p-2 flex">
                    <p className="text-sm font-bold">[Question No]</p>
                    <p className="text-tiny mt-0.5 mx-1 text-gray-400">[#1156pf-adi09-999-pxml734-vitr-00oq]</p>
            </div>
            <div className = "px-2 pb-2">
                    <p className="text-tiny">
                        <MathJax>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempus mi. Nullam volutpat tristique orci quis dapibus. Nulla vitae blandit lectus, hendrerit tristique elit. Suspendisse a mauris quis urna condimentum finibus vel vel ex.. \\(\\frac{10}{4x} \\approx 2^{12}\\)"}
                        </MathJax>
                    </p>
            </div>
            </Card>
        </div>
    )
}