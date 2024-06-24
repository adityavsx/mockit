import React from "react";
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function Temp() {
    const [selectedOption, setSelectedOption] = React.useState(new Set(["overview"]));

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

    // Convert the Set to an Array and get the first value.
    const selectedOptionValue = Array.from(selectedOption)[0];

    return (
        <ButtonGroup variant="flat" className = "px-1">
            <Dropdown placement="bottom-end" className = "w-12">
                <DropdownTrigger className = "h-6">
                        <Button
                            size="sm"
                            isIconOnly
                            className="h-4 w-32 font-semibold p-3 fill-green-400 text-green-900"
                        >
                        {labelsMap[selectedOptionValue]}
                        </Button>
                </DropdownTrigger>
                <DropdownMenu
                    disallowEmptySelection
                    aria-label="Section options"
                    selectedKeys={selectedOption}
                    selectionMode="single"
                    onSelectionChange={setSelectedOption}
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
const ChevronDownIcon = () => (
    <svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="currentColor" />
    </svg>
);
