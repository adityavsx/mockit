import _Tooltip from "@/app/ui/Tooltip";
import { Button } from "@nextui-org/button";

export default function MockEditWindowToolBox() {
    return (
        <div className="flex">
            <_Tooltip placement = "bottom" description="Upload the JSON file that contains all the information about this section">
                <Button  className="w-full border-1 border-dashed bg-white m-2">
                    Upload
                </Button>
            </_Tooltip>
            <_Tooltip placement = "bottom" description="Renders the question paper from the JSON file uploaded">
                <Button className="w-full border-1 border-dashed border-yellow-800 bg-yellow-100 m-2 text-yellow-800">
                    Render
                </Button>
            </_Tooltip>
            <_Tooltip placement = "bottom" description="Saves all the changes to the section">
                <Button className="w-full border-1 border-dashed border-purple-800 bg-purple-100 m-2 text-purple-800" >
                    Save Changes
                </Button>
            </_Tooltip>
        </div>
    )
}