'use client'
import SectionDetails from "./SectionDetails";
import MarkingScheme from "./MarkingScheme";
import RenderedQuestionPaper from "./RenderQuestionPaper";
import MockWindowHeader from "./MockWindowHeader";
import MockEditWindowToolBox from "./MockEditWindowToolBox";


export default function MockEditWindow(props: { mockName: string }) {
    return (
        <div className="p-4 select-none">
            <MockWindowHeader mockName = {props.mockName}/>
            <div className="flex">
                <div className ="w-1/2">
                    <div className= "flex">
                        <SectionDetails/>
                        <MarkingScheme />
                    </div>
                    <div className="mx-1">
                        <MockEditWindowToolBox/>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <RenderedQuestionPaper/>
                </div>
            </div>
        </div>
    )
}