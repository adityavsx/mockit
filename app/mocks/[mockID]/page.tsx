import Header from "@/components/Header";
import MockEditWindow from "@/components/mock-edit-screen/MockEditWindow";
import NavBar from "@/components/navigation-bar/NavBar";

export default function Lander({ params }: {
    params: {
        mockID : string
    }
}) {
    return (
        <main className="overflow-hidden">
            <Header />
            <div className="flex">
                <NavBar />
                <MockEditWindow mockName={params.mockID}/>
            </div>
        </main>
    )
}