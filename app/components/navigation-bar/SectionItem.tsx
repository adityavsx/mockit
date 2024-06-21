import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useDispatch } from 'react-redux';
import { sectionActions } from '@/app/state/section/sectionActionsSlice';
import { Tooltip } from '@nextui-org/react';


export default function SectionItem(props: {
    name: string,
    id : string ,
    desc: string,
}) {

    // handles the deleteClick
    const dispatch = useDispatch();
    const handleDeleteClick = (e: any) => {
        e.preventDefault();
        dispatch(sectionActions.deleteSection(props.id));

    }

    const handleSectionClick = (e: any) => {
        e.preventDefault();
        dispatch(sectionActions.selectSection(props.id));
    }


    return (
        <div className = "flex group h-9">
            <Tooltip
                content={
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Description</div>
                        <div className="text-tiny">{props.desc}</div>
                    </div>
                }
                closeDelay={0}
                showArrow={true}
                placement='right'
            >
                 <div
                    className="my-0.5 bg-section-item w-full font-regular text-sm flex
                    rounded-lg py-1 cursor-pointer transition-all duration-500 active:bg-section-item-action"
                    onClick = {(e)=>handleSectionClick(e)}
                >
                    <text className = "ml-2 mt-0.5 w-full">
                        {props.name}
                    </text>
                </div>
            </Tooltip>
            {/* // this is done */}
                <div
                    className="m-0.5 bg-section-item-delete rounded-md cursor-pointer transition-all duration-500 active:bg-section-item-delete-active"
                    onClick={(e)=>handleDeleteClick(e)}
                >
                    <DeleteTwoToneIcon
                        style={{
                            color: '#B35454',
                            width : '30px'
                        }}
                        className="my-1"
                    />
                </div>
            </div>
    )
}