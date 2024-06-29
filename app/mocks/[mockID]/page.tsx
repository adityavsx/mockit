import Header from "@/components/header/Header";
import MockEditWindow from "@/components/mock-edit-screen/MockEditWindow";
import NavBar from "@/components/navigation-bar/NavBar";

export default function MockIDPage({ params }: {
    params: {
        mockID : string
    }
}) {
    return (
        <main className="overflow-hidden">
            <div className="flex">
                <NavBar />
                <MockEditWindow mockName={params.mockID}/>
            </div>
        </main>
    )
}