'use client'
import RenderedQuestionPaper from "./RenderQuestionPaper";
import MockWindowHeader from "./MockWindowHeader";
import MockEditWindowToolBox from "./MockEditWindowToolBox";


export default function MockEditWindow(props: { mockName: string }) {
    return (
        <div className="select-none w-full flex">
            <div className  = "px-2 w-1/2">
                <MockWindowHeader mockName={props.mockName} />
                <MockEditWindowToolBox/>
            </div>
            <div className="px-2 w-1/2 ">
                <RenderedQuestionPaper />
            </div>
        </div>
    )
}