import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useDispatch } from 'react-redux';
import { addSectionActions } from '@/app/state/section/addSectionSlice';


export default function SectionItem(props: {
    name: string,
    id : string ,
    desc: string,
}) {

    // handles the deleteClick
    const dispatch = useDispatch();
    const handleDeleteClick = (e: any, key:string) => {
        e.preventDefault();
        dispatch(addSectionActions.deleteSection(props.id));

    }


    return (
        <div className = "flex group">
            <div
                className="h-10 mt-1 w-full font-regular text-sm flex transition-colors duration-500 ease-in-out group-hover:bg-question-type-item-hover rounded p-2"
            >
                <RateReviewTwoToneIcon
                    style={{
                        color: '#000D7C',
                    }} className="cursor-pointer active:fill-black my-0.5"
                />
                <text className = "mx-3 w-full my-0.5">
                    {props.name}
                </text>
            </div>
            <div
                className="p-1 m-1 bg-section-item-delete transition-all duration-500 scale-0 origin-left group-hover:scale-100 rounded-md cursor-pointer active:bg-section-item-delete-active"
                onClick={(e)=>handleDeleteClick(e, props.name)}
            >
                <DeleteTwoToneIcon
                    style={{
                        color: '#B35454',
                        width : '30px'
                    }}
                    className="my-1"
                />
            </div>
            <span
                className="my-1 w-auto max-w-80 absolute p-2 right-90 rounded-md left-96 shadow-lg text-white bg-black font-regular transition-all duration-500 scale-0 origin-left group-hover:scale-100"
            >
                <p>{props.desc}</p>
            </span>
        </div>
    )
}