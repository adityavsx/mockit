import { useDispatch, useSelector } from "react-redux"
import { Button } from "@nextui-org/button"
import { addSectionActions } from "@/app/state/section/sectionActionsSlice";
import SectionItem from "./SectionItem";
import { v4 as uuid4 } from 'uuid';



export default function EditMockSection(props: {
    mockName : string
}) {

    let sectionMap: Map<string, Object> = useSelector((state: any) => state.addSection.items);
    const dispatch = useDispatch();
    const handleClick = (e: any) => {
        e.preventDefault();
        let newSectionItem : String = `New Section`;
        dispatch(addSectionActions.addSection({
            id: uuid4(),
            value : {
                name : newSectionItem,
                description :  `Add a description for ${newSectionItem}`
            }
        }));
    }
    return (
        <div>
            <div>
                <div className="bg-transparent underline w-52 font-semibold mb-1">
                    {props.mockName}
                </div>
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
