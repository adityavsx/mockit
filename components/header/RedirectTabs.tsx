import { Tab, Tabs } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Key } from "react";

interface FastLinkObject {
    key: Key,
    name: string,
    redirectTo: string
}

const FastLinks: FastLinkObject[] = [
    {
        key: "home",
        name: "Home",
        redirectTo: "/home"
    },
    {
        key: "mocks/new-mock",
        name: "New",
        redirectTo: "/mocks/new-mock"
    },
    {
        key: "",
        name: "Pull",
        redirectTo: ""
    },
    {
        key: "u/lib",
        name: "Lib",
        redirectTo: "/u/lib"
    },
    {
        key: "docs",
        name: "Docs",
        redirectTo: "/docs"
    }
]
export default function RedirectTabs() {
    const pathName = usePathname();
    return (
        <div className="flex w-full flex-col items-center">
            <Tabs
                aria-label="Options"
                className="font-bold"
                selectedKey={pathName}
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none bg-[#6C7BFF]",
                    cursor: "w-full",
                    tab: "max-w-fit px-0 h-8",
                    tabContent: "text-black"
                }}
                items={FastLinks}
            >
                {
                    (fastLink) => (

                        <Tab
                            key={fastLink.key}
                            title={
                                <div className="flex items-center space-x-2">
                                    <span>{fastLink.name}</span>
                                </div>
                            }
                            href={fastLink.redirectTo}
                        />
                    )
                }
            </Tabs>
        </div>
    );
}