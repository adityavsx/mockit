'use client'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Button, ButtonGroup } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import EditMockSection from "./EditMockSection";
import PullMockSection from "./PullMockSection";
import { sectionActions } from '@/app/state/section/sectionSlice';

export default function SectionList() {

    // handles clicks of the top two buttons
    const dispatch = useDispatch();
    const handleSectionClicked = (e: any, clickedElement: String) => {
        dispatch(sectionActions.changeSections(clickedElement));
    }

    // truth values that are used to hide or show the sections
    const showEditMockSection = useSelector((state: any) => state.section.showEditMockSection);
    const showPullMockSection = useSelector((state:any) => state.section.showPullMockSection);

    // jsx element to return
    return (
        <div>
            <div>
                <div className="flex w-auto p-3 place-content-center">
                    <ButtonGroup>
                        <Button isIconOnly className="p-1 h-8 bg-navbar-determining-icon" radius="sm" onClick={(e)=>handleSectionClicked(e, 'pull-mock')}><LocationSearchingIcon className="fill-navbar-determining-icon-fill" /></Button>
                        <Button isIconOnly className="p-1 h-8 bg-navbar-determining-icon" radius="sm" onClick={(e)=>handleSectionClicked(e, 'edit-mock')}><EditNoteIcon className="fill-navbar-determining-icon-fill"/></Button>
                    </ButtonGroup>
                </div>
                {showEditMockSection && <EditMockSection />}
                {showPullMockSection && <PullMockSection/>}
            </div>
       </div>
    )
}
