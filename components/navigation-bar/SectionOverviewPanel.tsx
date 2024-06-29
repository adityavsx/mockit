'use client'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@nextui-org/button"
import {  addSection, sectionSet } from "@/state/section/sectionActionSlice";
import SectionItem from "./SectionItem";
import { v4 as uuid4 } from 'uuid';
import Empty from "@/ui/EmptyBox";
import MockPermissions from "./SectionPermissions";
import { RootState } from "@/state/store";

export default function SectionOverviewPanel() {

    const sectionMap: Map<string, Object> = useSelector((state: RootState) => state.sectionAction.sectionBucket);
    const sectionThere: sectionSet = useSelector((state: RootState) => state.sectionAction.isSectionSet);
    const canEdit:boolean = useSelector((state: RootState) => state.sectionPermission.canEdit);
    const dispatch = useDispatch();
    const handleClick = (e: any) => {
        e.preventDefault();
        let newSectionItem: String = "New Section";
        dispatch(addSection({
            id: uuid4(),
            value: {
                name: newSectionItem,
                description: `Add a description for ${newSectionItem}`
            }
        }));
    }
    return (
        <div className = "py-4">
            <div className="flex place-items-end">
                <div className = "flex items-center">
                    <h1 className="font-bold text-black text-xl mx-3">
                        Section
                    </h1>
                        <MockPermissions />
                </div>
            </div>
            <div>
                <div className="align-baseline mb-3 mt-1">
                    <Button
                        size="sm"
                        isIconOnly
                        className="h-8 w-60 font-semibold"
                        variant="bordered"
                        onClick={(e) => handleClick(e)}
                        isDisabled ={!canEdit}
                    >
                        Add a New Section
                    </Button>
                </div>
            </div>
            <div className="h-[70vh] overflow-y-hidden hover:overflow-auto max-h-screen scrollbarp-2">
                <Empty content="No section there to display" isEmpty={sectionThere.valueOf() === sectionSet.SECTION_ISNOT_SET.valueOf()}>
                    <ul>
                        {
                            Array.from(sectionMap, ([key, value]) => ({ key, value })).map((key: any) => (
                                <SectionItem key={key.key} name={key.value.name.toString()} desc={key.value.description.toString()} id={key.key} />
                            ))
                        }
                    </ul>
                </Empty>
            </div>
        </div>
    )
}
