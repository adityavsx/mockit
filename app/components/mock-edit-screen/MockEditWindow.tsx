'use client'
import { Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function MockEditWindow(props: { mockName: string }) {
    let selectedSectionIs: string = useSelector((state: any) => state.sectionAction.selectedSection);
    return (
        <div className="mt-10 ml-1 w-3/6 h-full overflow-y-hidden hover:overflow-auto max-h-screen min-h-screen scrollbar select-none">
            <div className="flex">
                <h1 className="text-2xl text-black ml-1 font-bold">
                    {props.mockName}
                </h1>
                <h6 className = "text-md text-gray-400 mt-1.5 ml-2 jutify-end">
                    { selectedSectionIs }
                </h6>
            </div>
            <Divider orientation = "horizontal"/>
        </div>
    )
}