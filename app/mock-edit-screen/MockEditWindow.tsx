import { Button } from "@nextui-org/button";
export default function MockEditWindow(props: { mockName: string }) {
    return (
        <div className= "w-3/6 h-full overflow-y-hidden hover:overflow-auto max-h-screen min-h-screen scrollbar select-none">
            <h1 className="text-2xl text-black underline m-10 font-bold bg-white">
                {props.mockName}
            </h1>
            <div className="m-5">
                <Button className = "absolute bg-add-section">
                    hi there
                </Button>
            </div>
        </div>
     )
}