import { createContext, useContext, useEffect, useRef, useState } from "react";

const OnAuthSubmitContext = createContext();

export function useOnAuthSubmit(){
    return useContext(OnAuthSubmitContext);
}

export default function AuthLayout({children}){
    let ref = useRef();
    ref.current = (ref.current ?? 0) + 1;
    console.log("auth", ref.current);
    let overlapRef = useRef();
    let ratio = {min: {square: 154, blur: 65}, max: {square: 586, blur: 135}};
    useEffect(() => {
        let form = overlapRef.current.parentElement;
        let {width, height} = form.getBoundingClientRect();
        let square = (width * height) / 500 - ratio.min.square;
        let blur = Math.round((square / (ratio.max.square - ratio.min.square)) * (ratio.max.blur - ratio.min.blur) + ratio.min.blur);
        //overlapRef.current.style.filter = `blur(${blur}px)`;
        overlapRef.current.style.width = width * 1.5 + "px";
        overlapRef.current.style.height = height * 1.5 + "px";
    });
    let submitHandlers = [];
    let onSubmit = (e) => {
        submitHandlers.forEach(handler => handler(e));
    };
    return <OnAuthSubmitContext.Provider value={(handler) => submitHandlers.push(handler)}>
        <div className="grid items-center justify-items-center h-svh w-svw">
            <form onSubmit={onSubmit} className="relative flex flex-col gap-4 sm:w-6/12 w-9/12 max-w-[350px]">
                <div className="overlap" ref={overlapRef}></div>
                {children}
            </form>
        </div>;
    </OnAuthSubmitContext.Provider>
}