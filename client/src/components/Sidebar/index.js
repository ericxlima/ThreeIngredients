import { SidebarContainer } from "./styles";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <SidebarContainer>
      <h1>Sidebar</h1>
      <Link to={`/`}>Home</Link>
      <Link to={`/login`}>Login</Link>
      <Link to={`/cadastro`}>Cadastro</Link>
    </SidebarContainer>
  );
}

export default Sidebar;
