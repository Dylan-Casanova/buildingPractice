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
// create a state to open and close all of the tabs at the same time, default value will be closed
// 

    return(
        <div className="accordion_section"> 
        <button className={`accordion ${setActive}`} onClick={toggleAccodrion} >
        <p className="accordion_tittle">{props.title} </p>
        <Chevron className={`${setRotate}`}  width ={10} fill ={"#777"} />
        </button>
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