'use client'
import { Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";

export default function MockEditWindow(props: { mockName: string }) {
    let selectedSectionIs: string = useSelector((state: any) => state.sectionAction.selectedSection);
    return (
        <div className="mt-10 ml-1 mr-2 overflow-y-hidden hover:overflow-auto max-h-screen scrollbar select-none mb-1">
            <div className="flex">
                <h1 className="text-2xl text-black ml-1 font-bold">
                    {props.mockName}
                </h1>
                <h6 className = "text-md text-gray-400 mt-1.5 ml-2 jutify-end">
                    { selectedSectionIs }
                </h6>
            </div>
            <Divider orientation="horizontal" />
            <div className="flex">
                <div className= "flex w-1/2">
                    <div className="container m-1 w-1/2 p-1">
                        <div className="font-bold">Section Details</div>
                        <div className="text-tiny">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempus mi. Nullam volutpat tristique orci quis dapibus. Nulla vitae blandit lectus, hendrerit tristique elit. Suspendisse a mauris quis urna condimentum finibus vel vel ex.
                        </div>
                    </div>
                    <div className="container m-1 w-1/2 p-1">
                        <div className="font-bold">Marking Scheme</div>
                        <div>
                            <div className="bg-green-300 pt-1 pb-1 pl-2 text-green-700 w-2/3 rounded-lg text-tiny my-2">
                                Posivite Score = 20
                            </div>
                            <div className="bg-red-300 pt-1 pb-1 pl-2 text-red-700 w-2/3 rounded-lg text-tiny">
                                Negative Score = 40
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <div className="container m-1 p-1">
                        <div className = "font-bold">
                            Rendered Question Paper
                        </div>
                        <div className="p-4 rounded border-1 border-gray-400 border-dashed">
                            <QuestionCard question="" options={new Array<string>} />
                            <QuestionCard question="" options={new Array<string>} />
                            <QuestionCard question="" options={new Array<string>} />
                            <QuestionCard question="" options={new Array<string>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}