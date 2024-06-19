'use client'
import SectionItem from "./SectionItem"
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { Button } from "@nextui-org/button";

function addSection() {
    console.log('add-section')
}

export default function SectionList() {
    return (
        <div>
            <div className="bg-transparent font-medium underline w-40 my-2">
                Sections
            </div>
            <Button>
                <AddBoxTwoToneIcon style={{
                    width: "20px",
                    color: '#000640'
                }} onClick={addSection} />
            </Button>
            <ul>
                <SectionItem name="Physics MMCQ" desc="Four choice question out of which one or more may be correct."/>
                <SectionItem name="Physics MCQ" desc="Four choice question with only one correct option." />
                <SectionItem name="Physics Matrix" desc="Input question where only Integers are correct" />
                <SectionItem name="Maths Matrix" desc="Input question where numbers upto two decimal places are correct" />
                <SectionItem name="Chem MMCQ" desc="Input question where numbers upto two decimal places are correct" />
                <SectionItem name="Chem MCQ" desc="Input question where numbers upto two decimal places are correct" />
                <SectionItem name="Chem Matrix" desc="Input question where numbers upto two decimal places are correct" />
            </ul>
        </div>
    )
}