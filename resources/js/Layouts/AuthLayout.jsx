import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WordSenseLogo from "../Components/WordSenseLogo";
import { createPortal } from "react-dom";

const OnAuthSubmitContext = createContext();

export function useOnAuthSubmit(){
    return useContext(OnAuthSubmitContext);
}

export default function AuthLayout({children, target}){
    let overlapRef = useRef();
    let refrashOverlapId = null;
    let refreshOverlap = (withoutAnimation = false) => {
        if(refrashOverlapId)
            clearTimeout(refrashOverlapId);
        if(withoutAnimation)
            overlapRef.current.classList.remove("animated");
        let refresh = () => {
            let form = overlapRef.current.parentElement;
            let {width, height} = form.getBoundingClientRect();
            let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            overlapRef.current.style.width = Math.min(width * 1.5, vw) + "px";
            overlapRef.current.style.height = Math.min(height * 1.2, vh) + "px";
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
    return <div className="auth-container grid items-center justify-items-center w-full h-[100svh] absolute overflow-y-auto top-0"> 
                <form onSubmit={onSubmit} className="relative sm:w-6/12 w-9/12 max-w-[350px] py-10">
                    <WordSenseLogo mode="forAuth" updateDelay="0.2" />
                    <motion.div 
                        initial={{transform: "scale(0) translate(-50%, -50%)"}}
                        animate={{transform: "scale(1) translate(-50%, -50%)"}}
                        transition={{duration: 1}}
                        ref={overlapRef} 
                        className="overlap animated max-h-svh max-w-[calc(100vw-20px)]" 
                    />
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1}}
                    >
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                transition={{duration: .15}}
                                initial={{opacity:0,transform:"scale(0.97)"}}
                                animate={{opacity:1,transform:"scale(1)"}}
                                key={`motion${target}`}
                                className="flex flex-col gap-4"
                                exit={{opacity:0,transform:"scale(0.93)"}}
                                >
                                <OnAuthSubmitContext.Provider value={(handler) => submitHandlers.push(handler)}>
                                    {children}
                                </OnAuthSubmitContext.Provider>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </form>
            </div>;

}