import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function MockWindowHeader(props: {
    mockName: string
}) {
    let selectedSectionIs: string = useSelector((state: RootState) => state.sectionAction.selectedSection);
    return (
        <div className="flex border-gray-200 border-b-1">
            <h1 className="text-2xl text-black ml-1 font-bold">
                {props.mockName}
            </h1>
            <h6 className="text-md text-gray-400 mt-1.5 ml-2 jutify-end">
                {selectedSectionIs}
            </h6>
        </div>
    )
}