import NavBar from "./components/navigation-bar/NavBar"
import MockEditWindow from "./components/mock-edit-screen/MockEditWindow";
export default function Home() {
  return (
    <main className= "flex">
      <NavBar />
      <MockEditWindow mockName="JEE MAINS MOCK-2"/>
   </main>
  );
}
