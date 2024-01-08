import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Gradient from "../Utilities/GradientBackgoundAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import classes from "classnames";
import ProfileLayout from "./ProfileLayout";
import AuthLayout from "./AuthLayout";

export default function ({ children, target }) {
    let previousTarget = useRef();
    useEffect(() => {
        var gradient = new Gradient();
        gradient.initGradient("#layout-animationed-background");
    }, []);
    let layout = target.startsWith("Auth/") ? "Auth" : "Layout";
    if(layout == "Auth")
        children = 
            <AuthLayout useEnterAnimation={previousTarget.current != null} target={target}>
                {children}
            </AuthLayout>;
    else
        children = 
            <ProfileLayout useEnterAnimation={previousTarget.current != null} target={target}>
                {children}
            </ProfileLayout>;
    let result = <div>
        <canvas id="layout-animationed-background" className="fixed left-0 top-0 w-full -z-10 h-svh"></canvas>
        <motion.div 
            id="layout-non-animationed-background" 
            className="fixed left-0 top-0 w-full -z-10 h-svh" 
            initial={false}
            animate={{opacity: target.startsWith("Auth/") ? 0 : 0.85}}
            transition={{duration: 1}}
        />
        <AnimatePresence initial={false} mode="sync">
            <motion.div
                key={`layout${layout}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </div>;
    previousTarget.current = target;
    return result;
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
