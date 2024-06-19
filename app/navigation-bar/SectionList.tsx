'use client'
import SectionItem from "./SectionItem"
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Button, ButtonGroup } from "@nextui-org/button";

function addSection() {
    console.log('add-section')
}

export default function SectionList() {
    return (
        <div>
            <div>
                <div className="flex w-auto p-3 place-content-center">
                    <ButtonGroup>
                        <Button  isIconOnly className = "p-1 h-8 bg-navbar-determining-icon" radius="sm" ><LocationSearchingIcon className="fill-navbar-determining-icon-fill"/></Button>
                        <Button isIconOnly className = "p-1 h-8 bg-navbar-determining-icon" radius= "sm"><EditNoteIcon className="fill-navbar-determining-icon-fill"/></Button>
                    </ButtonGroup>
                </div>
                <div className="bg-transparent underline w-52 font-semibold">
                    SECTIONS
                </div>
                <div className = "align-baseline">
                        <Button size="sm" isIconOnly className="h-8 w-60 bg-add-section my-1 font-semibold">
                            New Section
                        </Button>
                    </div>
                </div>
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