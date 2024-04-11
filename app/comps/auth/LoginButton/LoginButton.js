"use client"
import React, { Children } from "react";

 
// import { useRouter } from "next/navigation"

export default function LoginButton({children, mode = "redirect" , asChild}){
    const onClick = (e)=>{
        e.preventDefault()
        // const router = useRouter();

        console.log("login");
    }
    return(
        <span onClick={onClick}>
            {children}
        </span>
    )

}