import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import SvgComponent from "./Svg";
import classes from "classnames";


export default function WordSenseLogo({mode = "regular", updateDelay = 0, className, ...props}){
    if(mode != "forAuth")
        return <SvgComponent {...props} className={classes(className)} />;
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
    return <div>
        {createPortal(<SvgComponent subRef={imgRef} {...props} className={classes(className, "absolute w-[350px] transition-[top] transition")} />, document.body)}
        <div ref={fakeRef} className="mb-[10%] w-full aspect-[822/350]"></div>
    </div>
}