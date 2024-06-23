import { useDispatch, useSelector } from "react-redux"
import { Button } from "@nextui-org/button"
import { sectionActions, sectionSet } from "@/app/state/section/sectionActionsSlice";
import SectionItem from "./SectionItem";
import { v4 as uuid4 } from 'uuid';
import Empty from "@/app/ui/EmptyBox";



export default function SectionOverviewPanel() {

    let sectionMap: Map<string, Object> = useSelector((state: any) => state.sectionAction.items);
    let sectionThere: sectionSet = useSelector((state: any) => state.sectionAction.isSectionSet);
    const dispatch = useDispatch();
    const handleClick = (e: any) => {
        e.preventDefault();
        let newSectionItem : String = `New Section`;
        dispatch(sectionActions.addSection({
            id: uuid4(),
            value : {
                name : newSectionItem,
                description :  `Add a description for ${newSectionItem}`
            }
        }));
    }
    return (
        <div className="py-16">
            <h1 className="font-bold text-black">
                Section Overview
            </h1>
            <div>
                <div className="align-baseline mb-3 mt-1">
                    <Button
                        size="sm"
                        isIconOnly
                        className="h-8 w-60 font-semibold"
                        variant = "bordered"
                        onClick={(e)=>handleClick(e)}
                    >
                        Add a New Section
                    </Button>
                </div>
            </div>
            <div className="h-[65vh] overflow-y-hidden hover:overflow-auto max-h-screen scrollbarp-2">
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
