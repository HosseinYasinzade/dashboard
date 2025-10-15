import Header from "./components/organisms/Header";
import Sidebar from "./components/organisms/Sidebar";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
    </div>
  );
}
