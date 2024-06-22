'use client'
import { useDispatch, useSelector } from "react-redux";
import PullMockSection from "./PullMockSection";
import { whichSectionActions } from '@/app/state/section/whichSectionSlice';
import SectionOverviewPanel from './SectionOverviewPanel';

export default function SectionList() {

    // handles clicks of the top two buttons
    const dispatch = useDispatch();
    const handleSectionClicked = (e: any, clickedElement: String) => {
        dispatch(whichSectionActions.changeSections(clickedElement));
    }

    // truth values that are used to hide or show the sections
    const showEditMockSection = useSelector((state: any) => state.section.showEditMockSection);
    const showPullMockSection = useSelector((state:any) => state.section.showPullMockSection);

    // jsx element to return
    return (
        <div>
            <div>
                <div className = "h-[90vh] container px-2 overflow-hidden">
                    {showEditMockSection && <SectionOverviewPanel />}
                </div>
                {showPullMockSection && <PullMockSection/>}
            </div>
       </div>
    )
}
