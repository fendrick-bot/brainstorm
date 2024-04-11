import FrontImages from "./comps/Images/FrontImages";
import Navbar from "./comps/navbar/Navbar";
import Button from "./comps/Button/Button";
import { MdLightMode } from "react-icons/md";
import "./style.css";

import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div id="top-nav-btns">
        <Link href={"/login"}><Button  btn_text={"Login / Register"}/></Link>
        {/* <Button  btn_text={"Register"}/> */}
        <Button btn_icon={<MdLightMode/>}/>
      </div>

      {/* <FrontImages/> */}
      {/* <FrontImages/>
      <FrontImages/>
      <FrontImages/>
      <FrontImages/>
      <FrontImages/> */}
    </main>
  );
}
