import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
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
        let updated = false;
        let requestUpdate = () => {
            if(updated)
                return;
            onChange();
            requestAnimationFrame(requestUpdate);
        };
        requestUpdate();
        setTimeout(() => updated = true, Number(updateDelay) * 1000);
    });
    useEffect(() => {
        if(mode != "forAuth")
            return;
        fakeRef.current?.closest(".auth-container")?.addEventListener("scroll", onChange);
        window.addEventListener("resize", onChange);
        return () => { window.removeEventListener("resize", onChange); };
    }, []);
    let svgComponent = <SvgComponent subRef={imgRef} {...props} className={classes(className, "absolute w-[350px] transition transition-[top]")} />;
    if(mode == "forAuth")
        svgComponent = (
            <motion.div
            transition={{duration: 1}}
            key={`motionWordSenseIcon`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
                {svgComponent}
            </motion.div>)
    return <div>
        {createPortal(svgComponent, document.body)}
        <div ref={fakeRef} className="mb-[10%] w-full aspect-[822/350]"></div>
    </div>
}