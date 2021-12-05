import React,{ useState, useRef } from "react";
import "./Accordion.css"
import Chevron from "./Chevron"
function Accordion(props){

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");

    const content = useRef(null);

    function toggleAccodrion() {
        console.log(content.current.scrollHeight)
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate");

    }
// create a state to open and close all of the tabs at the same time, default value will be cl



    return(
        
        <div className="accordion_section"> 
        <button className={`accordion ${setActive}`} onClick={toggleAccodrion} >
        <p className="accordion_tittle">{props.title} </p>
        
        <svg className={`${setRotate}`}  width={13}  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 400 612"><path fill="white" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
        <Chevron className={`${setRotate}`}  width ={10} fill ={"#777"} /></button>
        <div ref={content} style={{maxHeight:`${setHeight}`}} className="accordion_content">
        <div className="accordion_text"
        dangerouslySetInnerHTML={{__html: props.content}}
        >
            
        </div>

        </div>

        </div>
    )
}

export default Accordion;