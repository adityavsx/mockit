import { useDispatch, useSelector } from "react-redux"
import { Button } from "@nextui-org/button"
import { addSectionActions } from "@/app/state/section/addSectionSlice";
import SectionItem from "./SectionItem";



export default function EditMockSection() {

    let sectionList: string[] = useSelector((state: any) => state.addSection.items);
    const dispatch = useDispatch();
    const handleClick = (e: any) => {
        e.preventDefault();
        let newSectionItem : String = `Section ${sectionList.length+1}`;
        dispatch(addSectionActions.addSection({ name : newSectionItem }));
    }
    return (
        <div>
            <div>
                <div className="bg-transparent underline w-52 font-semibold">
                    SECTIONS
                </div>
                <div className="align-baseline">
                    <Button
                        size="sm"
                        isIconOnly
                        className="h-8 w-60 bg-add-section my-1 font-semibold"
                        onClick={(e)=>handleClick(e)}
                    >
                        New Section
                    </Button>
                </div>
            </div>
            <ul>
                {sectionList.map(sectionItem => (
                    <SectionItem key={sectionItem} name = {sectionItem} desc ="This has nothing to do with the desciprtion "/>
                ))}
            </ul>
        </div>
    )
}

// <SectionItem name="Physics MMCQ" desc="Four choice question out of which one or more may be correct." />