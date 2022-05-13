import "./App.css";
import Content from "./components/Sidebar/Content/Content";
import OpenedSidebar from "./components/Sidebar/OpenedSidebar/OpenedSidebar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <OpenedSidebar />
      <Content />
    </div>
  );
}

export default App;
