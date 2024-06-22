import { Tooltip } from "@nextui-org/react";
import React from "react";

export default function _Tooltip(props: {
    children: React.ReactNode,
    description: string,
    placement: "right" | "left" | "top" | "bottom"
}) {
    return (
        <Tooltip
            content={
                <div className="px-1 py-2">
                    <div className="text-small font-bold">Description</div>
                    <div className="text-tiny">{ props.description }</div>
                </div>
            }
            closeDelay={0}
            showArrow={true}
            placement= {props.placement}
        >
            {props.children}
        </Tooltip>
    )
}