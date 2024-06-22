import _Tooltip from "@/app/ui/Tooltip";
import { Tooltip } from "@nextui-org/react";

export default function MarkingScheme() {
    return (
        <div className= "container mb-1 mr-1 ml-1 w-1/2 p-1">
            <div className="p-1">
                <div className="font-bold">Marking Scheme</div>
                <div>
                    <_Tooltip description = "Score on correct answer" placement = "right">
                        <div className="bg-green-300 pt-1 pb-1 pl-2 text-green-700 w-1/3 rounded-lg text-tiny my-2">
                            Score +20
                        </div>
                    </_Tooltip>
                    <_Tooltip description = "Score on wrong answer" placement = "left">
                        <div className="bg-red-300 pt-1 pb-1 pl-2 text-red-700 w-1/3 rounded-lg text-tiny">
                            Score -40
                        </div>
                    </_Tooltip>
                </div>
            </div>
        </div>
    )
}