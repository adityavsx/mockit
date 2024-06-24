import NavBar from "../components/navigation-bar/NavBar"
import MockEditWindow from "../components/mock-edit-screen/MockEditWindow";
import Header from "../components/Header";
export default function Home() {
  return (
    <main className = "overflow-hidden">
      <Header />
      <div className = "flex">
        <NavBar />
        <MockEditWindow mockName="JEE MAINS MOCK-2" />
      </div>
   </main>
  );
}
