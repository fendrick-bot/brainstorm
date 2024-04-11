'use client'

import "./navstyles.css"

import { GoHomeFill } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import { PiShareNetworkFill } from "react-icons/pi";
import { PiGearSixFill } from "react-icons/pi";
import { RiFeedbackFill } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa6";
import { BsPersonHearts } from "react-icons/bs";
import { IoLogoOctocat } from "react-icons/io";


import Image from "next/image";
import Link from "next/link";
import Mainlogo from "../../../resources/mainLogo.png";
import boy from "../../../resources/boy.png";

import { useState } from "react";

export default function Navbar() {
    const [isVisible, setVisible] = useState('disabledmenu')
    return (
        <div id="nav-bar">
            <input id="nav-toggle" type="checkbox"/>
            <div id="nav-header">
                <div id="nav-title"><Link href='/'> <Image src={Mainlogo} width={40} unoptimized /></Link>Brain`Strom</div>
                <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
                <hr />
            </div>
            <div id="nav-content">
                <div class="nav-button"><div className="nav-icons"><GoHomeFill /></div><span>Home</span>
                <div id="home-tooltip" className="nav-tooltip-div">Home</div>
                </div>

                <div class="nav-button"><div className="nav-icons"><PiShareNetworkFill /></div><span>Connect</span>
                <div id="home-tooltip" className="nav-tooltip-div">Connect</div></div>
                <div class="nav-button"><div className="nav-icons"><IoPeople /></div><span>Friends</span>
                <div id="home-tooltip" className="nav-tooltip-div">Friends</div></div>
                <hr />
                <div class="nav-button"><div className="nav-icons"><PiGearSixFill /></div><span>Settings</span>
                <div id="home-tooltip" className="nav-tooltip-div">Settings</div></div>
                <div class="nav-button"><div className="nav-icons"><RiFeedbackFill /></div><span>Feedback</span>
                <div id="home-tooltip" className="nav-tooltip-div">Feedback</div></div>
                <div class="nav-button"><div className="nav-icons"><HiDocumentText /></div><span>Privacy & Policy</span>
                <div id="home-tooltip" className="nav-tooltip-div">Privacy & Policy</div></div>
                <div class="nav-button"><div className="nav-icons"><IoLogoOctocat /></div><span>About</span>
                <div id="home-tooltip" className="nav-tooltip-div">About</div></div>
                <hr />
                <div class="nav-button"><div className="nav-icons"><BsPersonHearts /></div><span>My Profile</span>
                <div id="home-tooltip" className="nav-tooltip-div">My Profile</div></div>
                <div id="nav-content-highlight"></div>
                
            </div>
            <input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar"><Image src={boy} width={40} unoptimized /></div>
                    <div id="nav-footer-titlebox"><a id="nav-footer-title">Fendrick</a><span id="nav-footer-subtitle">Admin</span></div>
                    <label for="nav-footer-toggle"><div className="nav-icons"><FaCaretDown /></div></label>
                </div>
                <div id="nav-footer-content">
                    <p>Heyy Everyone! I am Aditya Raj. I am the creator of <b>Brain`Storm</b>. This is a free site to interact with random people and discuss with them about intersting topics. Hope you guys like it...
                        😃😃
                    </p>
                </div>
            </div>
        </div>

    )
}