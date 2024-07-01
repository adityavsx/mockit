'use client'
import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { updatePermissions } from "@/state/section/sectionPermissionSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";


const descriptionsMap = {
    overview:
        "Default label that does not have any edit permissions, you can only see the mock",
    edit:
        "Elevate priveledges that allow you to make changes to the mock",
};

const labelsMap = {
    overview: "Overview",
    edit: "Edit",
}
export default function SectionPermissions() {
    const [permissionsTextColor, setPermissionsTextColor] = useState("h-4 w-24 p-3 bg-section-item-background text-orange-300")
    const givenPermission = useSelector((state: RootState) => state.sectionPermission.permission);
    const dispatch = useDispatch();
    function handleOnSelectionChange(key: string) {
        if (key === "overview") setPermissionsTextColor("h-4 w-24 p-3 bg-section-item-background text-orange-300");
        else setPermissionsTextColor("h-4 w-24 p-3 bg-section-item-background text-green-300")
        dispatch(updatePermissions(key));
    }
    return (
        <ButtonGroup variant="flat" className = "px-1">
            <Dropdown placement="bottom-end" className = "w-12">
                <DropdownTrigger>
                        <Button
                        size="sm"
                        isIconOnly
                        className={permissionsTextColor}
                    >
                        {givenPermission}
                        </Button>
                </DropdownTrigger>
                <DropdownMenu
                    disallowEmptySelection
                    aria-label="Section options"
                    selectedKeys={givenPermission}
                    selectionMode="single"
                    onSelectionChange={(e:any)=>handleOnSelectionChange(e["anchorKey"])}
                >
                    <DropdownItem key="overview" description={descriptionsMap["overview"]}>
                        {labelsMap["overview"]}
                    </DropdownItem>
                    <DropdownItem key="edit" description={descriptionsMap["edit"]}>
                        {labelsMap["edit"]}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    );
}