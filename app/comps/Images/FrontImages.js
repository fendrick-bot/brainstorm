import Image from "next/image";
import "./fistyles.css";
import fp1 from "../../../resources/fp-01.png";

export default function FrontImages(){
    return(
        <div id="imageDiv">
            <Image
            src={fp1} 
            width={400}
            alt="FrontImage"
            />
            </div>
    )
}
