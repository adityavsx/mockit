import NavigationBar from ".//navigation-bar/navigationBar"
import MockEditWindow from "./mock-edit-screen/MockEditWindow";
export default function Home() {
  return (
    <main className= "flex">
      <NavigationBar />
      <MockEditWindow mockName= "JEE MAINS MOCK 2"/>
   </main>
  );
}
