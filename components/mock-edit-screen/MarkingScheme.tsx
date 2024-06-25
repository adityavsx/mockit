import { RootState } from "@/state/store";
import Empty from "@/ui/EmptyBox";
import _Tooltip from "@/ui/Tooltip";
import { useSelector } from "react-redux";

export default function MarkingScheme() {
    const isSectionSelected = useSelector((state: RootState) => state.sectionAction.selectedSection);
    return (
        <div className="container mb-1 mr-1 ml-1 p-1">
            <div>
                <div className="p-1">
                    <div className="font-bold">Marking Scheme</div>
                    <div className="h-[20vh]">
                        <Empty content="Marking Scheme" isEmpty={isSectionSelected === '[select section]'}>
                            <_Tooltip description="Score on correct answer" placement="right">
                                <div className="bg-green-300 pt-1 pb-1 pl-2 text-green-700 w-1/3 rounded-lg text-tiny my-2">
                                    Score +20
                                </div>
                            </_Tooltip>
                            <_Tooltip description="Score on wrong answer" placement="left">
                                <div className="bg-red-300 pt-1 pb-1 pl-2 text-red-700 w-1/3 rounded-lg text-tiny">
                                    Score -40
                                </div>
                            </_Tooltip>
                        </Empty>
                    </div>
                </div>
            </div>
        </div>
    )
}