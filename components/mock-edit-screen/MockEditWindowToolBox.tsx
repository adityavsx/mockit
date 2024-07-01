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
        <div className="flex items-center border-b-2 border-divider pb-4">
            <Button className="w-2/6 rounded-full mr-4 my-2 text-white  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" isDisabled={!canEdit}>
                <form>
                    <input className="bg-transparent cursor-pointer" type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
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