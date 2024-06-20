import { useDispatch, useSelector } from "react-redux"
import { Button } from "@nextui-org/button"
import { addSectionActions } from "@/app/state/section/addSectionSlice";
import SectionItem from "./SectionItem";



export default function EditMockSection() {

    let sectionMap: Map<string, Object> = useSelector((state: any) => state.addSection.items);
    const dispatch = useDispatch();
    const handleClick = (e: any) => {
        e.preventDefault();
        let newSectionItem : String = `Section ${sectionMap.size+1}`;
        dispatch(addSectionActions.addSection({
            id: sectionMap.size,
            value : {
                name : newSectionItem,
                description :  `Add a description for ${newSectionItem}`
            }
        }));
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
                {
                    Array.from(sectionMap, ([key, value]) => ({ key, value })).map((key:any)  => (
                        <SectionItem key={key.key} name={key.value.name.toString()} desc={key.value.description.toString()} id={key.key} />
                    ))
                }
            </ul>
        </div>
    )
}
