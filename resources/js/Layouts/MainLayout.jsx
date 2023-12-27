import { Link } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import Gradient from "../Utilities/GradientBackgoundAnimation";

export default function ({ children }) {
    useEffect(() => {
        var gradient = new Gradient();
        gradient.initGradient("#animationed-background");
    }, []);
    return <div>
        <canvas id="animationed-background" className="absolute left-0 top-0 w-full h-svh -z-10"></canvas>
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
