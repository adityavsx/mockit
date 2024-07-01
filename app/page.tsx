import NavBar from "../components/navigation-bar/NavBar"
import MockEditWindow from "../components/mock-edit-screen/MockEditWindow";
import Header from "../components/header/Header";
export default function Home() {
  return (
    <main className = "overflow-hidden flex dark bg-background-color" >
        <NavBar />
        <MockEditWindow mockName="JEE MAINS MOCK-2" />
   </main>
  );
}
