import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function MockWindowHeader(props: {
    mockName: string
}) {
    let selectedSectionIs: string = useSelector((state: RootState) => state.sectionAction.selectedSection);
    return (
        <div className="boder-white py-2">
            <h1 className="text-2xl text-text-accent-color-1 font-bold">
                {props.mockName}
            </h1>
            <h6 className="text-sm text-text-accent-color-3">
                {selectedSectionIs}
            </h6>
        </div>
    )
}