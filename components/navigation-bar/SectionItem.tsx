import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import _Tooltip from '@/ui/Tooltip';
import { deleteSection, selectSection } from '@/state/section/sectionActionSlice';
import { RootState } from '@/state/store';


export default function SectionItem(props: {
    name: string,
    id: string,
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
            <_Tooltip description={props.desc} placement="right">
                <div
                    className="my-0.5 w-full font-medium text-[13px] flex  cursor-pointer border-2 border-section-item-background items-center text-text-accent-color-2 hover:bg-section-item-background ease-in duration-100"
                    onClick={(e) => handleSectionClick(e)}
                >
                    <text className="ml-2">
                        {props.name}
                    </text>
                </div>
            </_Tooltip>
            {canEdit  && <div
                className="m-0.5 rounded-sm cursor-pointer border-section-item-background border-2 flex items-center"
                onClick={(e) => handleDeleteClick(e)}
            >
                 <DeleteTwoToneIcon
                    style={{
                        color: '#ff6d6d',
                        width: '30px',
                    }}
                />
            </div>}
        </div>

    )
}