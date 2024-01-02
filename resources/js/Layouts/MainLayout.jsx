import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Gradient from "../Utilities/GradientBackgoundAnimation";
import { createPortal } from "react-dom";

export default function ({ children, target }) {
    let ref = useRef();
    ref.current = (ref.current ?? 0) + 1;
    console.log("layout", ref.current);
    useEffect(() => {
        var gradient = new Gradient();
        gradient.initGradient("#animationed-background");
    }, []);
    console.log(target);
    return <div>
        <canvas id="animationed-background" className="fixed left-0 top-0 w-full -z-10 h-svh"></canvas>
        {children}
    </div>;
   /* let ref = useRef();
    if (!ref.current) ref.current = 0;
    ref.current++;
    return (
        <div className="border border-black">
            Total renders: {ref.current}
            <header>
                <Link href="/">Home</Link>
                <br />
                <Link href="/profile">Profile</Link>
            </header>
            {children}
        </div>
    );*/
}
