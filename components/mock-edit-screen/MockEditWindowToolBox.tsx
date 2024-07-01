import { RootState } from "@/state/store";
import _Tooltip from "@/ui/Tooltip";
import { ArrowForwardIosOutlined, CheckTwoTone, CloudTwoTone } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function MockEditWindowToolBox() {
    const [, setFile] = useState<File>();
    const canEdit = useSelector((state: RootState) => state.sectionPermission.canEdit);
    return (
        <div className="flex items-center">
            <Button isIconOnly className="mr-4 rounded-full text-white bg-section-item-background" isDisabled={!canEdit}>
                <form className="h-full flex items-center justify-center">
                    <input className="bg-transparent text-transparent cursor-pointer" type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
                    <CloudTwoTone />
                </form>
            </Button>
            <Button isIconOnly className="bg-section-item-background mr-4 rounded-full text-yellow-300" isDisabled={!canEdit}>
                <ArrowForwardIosOutlined/>
            </Button>
            <Button isIconOnly className="bg-section-item-background mr-4 rounded-full text-green-300" isDisabled={!canEdit}>
                <CheckTwoTone/>
            </Button>
        </div>
    )
}