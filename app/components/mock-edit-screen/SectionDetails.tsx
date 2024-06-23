import Empty from "@/app/ui/EmptyBox";
import { useSelector } from "react-redux"

export default function SectionDetails(props: {
    content: string
}) {
    const isSectionSelected = useSelector((state: any) => state.sectionAction.selectedSection);
    return (
        <div className="container m-1">
            <div className="p-1">
                <p className="font-bold h-full">Section Details</p>
                <div className="h-[20vh]">
                    <Empty content="Select" isEmpty={isSectionSelected === '[select section]'}>
                        <div className="text-tiny">
                            {props.content}
                        </div>
                    </Empty>
                </div>
            </div>
        </div>
    )
}