import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WordSenseLogo from "../Components/WordSenseLogo";
import { createPortal } from "react-dom";

const OnAuthSubmitContext = createContext();

export function useOnAuthSubmit(){
    return useContext(OnAuthSubmitContext);
}

export default function AuthLayout({children, target}){
    let ref = useRef();
    ref.current = (ref.current ?? 0) + 1;
    console.log("auth", ref.current);
    let overlapRef = useRef();
    let ratio = {min: {square: 154, blur: 65}, max: {square: 586, blur: 135}};
    let refrashOverlapId = null;
    let refreshOverlap = (withoutAnimation = false) => {
        if(refrashOverlapId)
            clearTimeout(refrashOverlapId);
        if(withoutAnimation)
            overlapRef.current.classList.remove("animated");
        let refresh = () => {
            let form = overlapRef.current.parentElement;
            let {width, height} = form.getBoundingClientRect();
            let square = (width * height) / 500 - ratio.min.square;
            //let blur = Math.round((square / (ratio.max.square - ratio.min.square)) * (ratio.max.blur - ratio.min.blur) + ratio.min.blur);
            overlapRef.current.style.width = Math.min(width * 1.5, document.body.clientWidth) + "px";
            overlapRef.current.style.height = Math.min(height * 1.2, document.body.clientHeight) + "px";
            if(withoutAnimation)
                requestAnimationFrame(() => overlapRef.current.classList.add("animated"));
        };
        if(withoutAnimation)
            refresh();
        else
            refrashOverlapId = setTimeout(refresh, 350);
    }
    useEffect(refreshOverlap);
    useEffect(() => {
        let refreshOverlapOnResize = () => refreshOverlap(true);
        window.addEventListener('resize', refreshOverlapOnResize);
        return () => window.removeEventListener('resize', refreshOverlapOnResize);
    }, []);
    let submitHandlers = [];
    let onSubmit = (e) => {
        submitHandlers.forEach(handler => handler(e));
    };
    console.log("TARG", target)
    return <OnAuthSubmitContext.Provider value={(handler) => submitHandlers.push(handler)}>
            <div className="grid items-center justify-items-center min-h-[100svh] w-full">
                <form onSubmit={onSubmit} className="relative sm:w-6/12 w-9/12 max-w-[350px] py-10">
                    <WordSenseLogo mode="forAuth" updateDelay="0.2" />
                    <div ref={overlapRef} className="overlap animated"></div>
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            transition={{duration: .15}}
                            initial={{opacity:0,transform:"scale(0.97)"}}
                            animate={{opacity:1,transform:"scale(1)"}}
                            key={`motion${target}`}
                            className="flex flex-col gap-4"
                            exit={{opacity:0,transform:"scale(0.93)"}}
                            >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </form>
            </div>
    </OnAuthSubmitContext.Provider>
}