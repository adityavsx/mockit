﻿import _Tooltip from "@/ui/Tooltip";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function MockEditWindowToolBox() {
    const [file, setFile] = useState<File>();
    const handleSubmit = () => { };

    return (
        <div className="flex">
            <_Tooltip placement = "bottom" description="Upload the JSON file that contains all the information about this section">
                <Button className="w-1/3 border-1 border-dashed bg-white m-2 ">
                    <form onSubmit={handleSubmit} className="h-full flex items-center justify-center">
                        <input className="bg-transparent bg-black cursor-pointer" type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
                    </form>
                </Button>
            </_Tooltip>
            <_Tooltip placement = "bottom" description="Renders the question paper from the JSON file uploaded">
                <Button className="w-1/3 border-1 border-dashed border-yellow-800 bg-yellow-100 m-2 text-yellow-800">
                    Render
                </Button>
            </_Tooltip>
            <_Tooltip placement = "bottom" description="Saves all the changes to the section">
                <Button className="w-1/3  border-1 border-dashed border-purple-800 bg-purple-100 m-2 text-purple-800" >
                    Save Changes
                </Button>
            </_Tooltip>
        </div>
    )
}