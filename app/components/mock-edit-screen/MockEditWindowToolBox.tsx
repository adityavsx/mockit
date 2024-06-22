import { Button } from "@nextui-org/button";

export default function MockEditWindowToolBox() {
    return (
        <div className = "flex">
            <Button className = "w-full border-1 border-dashed bg-white m-2">
                Upload
            </Button>
            <Button className="w-full border-1 border-dashed border-yellow-800 bg-yellow-100 m-2 text-yellow-800">
                Render
            </Button>
            <Button className="w-full border-1 border-dashed border-purple-800 bg-purple-100 m-2 text-purple-800" >
                Save Changes
            </Button>
        </div>
    )
}