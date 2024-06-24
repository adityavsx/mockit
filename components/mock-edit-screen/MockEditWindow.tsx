'use client'
import SectionDetails from "./SectionDetails";
import MarkingScheme from "./MarkingScheme";
import RenderedQuestionPaper from "./RenderQuestionPaper";
import MockWindowHeader from "./MockWindowHeader";
import MockEditWindowToolBox from "./MockEditWindowToolBox";


export default function MockEditWindow(props: { mockName: string }) {
    return (
        <div className="p-4 select-none w-full">
            <MockWindowHeader mockName = {props.mockName}/>
            <div className="flex">
                <div className ="w-1/2">
                    <div className= "flex">
                        <SectionDetails content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum orci ut finibus aliquam. Nulla gravida nulla urna, non pulvinar turpis iaculis vulputate. Pellentesque interdum odio nibh. More that just that babe"/>
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