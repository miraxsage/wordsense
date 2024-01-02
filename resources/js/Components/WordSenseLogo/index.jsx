import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import logo from "./logo.svg";

export default function WordSenseLogo({mode = "regular", updateDelay = 0, ...props}){
    let imgRef = useRef();
    let fakeRef = useRef();
    let onChange = () => {
        let bounds = fakeRef.current.getBoundingClientRect();
        imgRef.current.style.width = bounds.width + "px";
        imgRef.current.style.left = bounds.left + "px";
        imgRef.current.style.top = bounds.top + "px";
    };
    useEffect(() => {
        if(mode != "forAuth")
            return;
        onChange();
        setTimeout(onChange, Number(updateDelay) * 1000);
    });
    useEffect(() => {
        window.addEventListener("resize", onChange);
        return () => { window.removeEventListener("resize", onChange); };
    }, [])
    if(mode == "forAuth"){
        return <div>
            {createPortal(<img ref={imgRef} src={logo} {...props} className="absolute w-[350px] transition-[top] transition" />, document.body)}
            <div ref={fakeRef} className="mb-[10%] w-full aspect-[822/350]"></div>
        </div>
    }
    return <img src={logo} {...props} />
}