import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
 
export default function DefaultLayout({NavList}) {
  return (
    <div>
      <Header NavList={NavList} />
      <Outlet />
      <Footer />
    </div>
  );
}