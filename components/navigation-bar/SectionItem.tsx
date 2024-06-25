import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import _Tooltip from '@/ui/Tooltip';
import { deleteSection, selectSection } from '@/state/section/sectionActionSlice';
import { RootState } from '@/state/store';


export default function SectionItem(props: {
    name: string,
    id : string ,
    desc: string,
}) {

    // handles the deleteClick
    const dispatch = useDispatch();
    const handleDeleteClick = (e: any) => {
        e.preventDefault();
        dispatch(deleteSection(props.id));
    }

    const handleSectionClick = (e: any) => {
        e.preventDefault();
        dispatch(selectSection(props.id));
    }

    const canEdit = useSelector((state: RootState) => state.sectionPermission.canEdit);
    return (
        <div className="flex group h-9">
            <_Tooltip description={props.desc} placement= "right">
            <div
                className="my-0.5 bg-section-item w-full font-regular text-sm flex
                    rounded-lg py-1 cursor-pointer transition-all duration-500 active:bg-section-item-action"
                onClick={(e) => handleSectionClick(e)}
            >
                <text className="ml-2 mt-0.5 w-full">
                    {props.name}
                </text>
            </div>
            </_Tooltip>
                <div
                    className="m-0.5 bg-section-item-delete rounded-md cursor-pointer transition-all duration-500 active:bg-section-item-delete-active"
                    onClick={(e)=>handleDeleteClick(e)}
                >
                {canEdit && <DeleteTwoToneIcon
                    style={{
                        color: '#B35454',
                        width: '30px'
                    }}
                    className="my-1"
                />}
                </div>
            </div>
    )
}