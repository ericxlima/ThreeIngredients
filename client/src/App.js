import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Main } from "./styles";

export default function App() {
  return (
    <div>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
