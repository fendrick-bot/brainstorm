import "./btnstyle.css"
// import { MdLightMode } from "react-icons/md";
export default function Button({btn_text, btn_icon}){
    return(
        <button className="btns"><span><span id="btn-icon">{btn_icon}</span>{btn_text}</span></button>
    )
}