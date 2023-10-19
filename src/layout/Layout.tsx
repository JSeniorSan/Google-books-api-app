import { Outlet } from "react-router-dom";
import SearchComponents from "../components/SearchComponents/SearchComponents";
function Layout(): JSX.Element {
  return (
    <>
      <SearchComponents />
      <Outlet />
    </>
  );
}

export default Layout;
