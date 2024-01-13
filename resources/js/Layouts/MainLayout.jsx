import { useEffect, useRef } from "react";
import Gradient from "../Utilities/GradientBackgoundAnimation";
import { AnimatePresence, motion } from "framer-motion";
import ProfileLayout from "./ProfileLayout";
import AuthLayout from "./AuthLayout";
import { useTheme } from "@emotion/react";
import classes from "classnames";

export default function MainLayout({ children, target }) {
    let previousTarget = useRef();
    let theme = useTheme();
    let isLight = theme.palette.mode == "light";
    let gradientColors =
        theme.palette.mode == "light"
            ? ["#6561e2", "#92a3f8", "#ffffff", "#92d6f8"]
            : ["#0f0f19", "#0d0f1e", "#022238", "#00313c"];
    useEffect(() => {
        var gradient = new Gradient();
        gradient.initGradient("#layout-animationed-background");
    }, [theme.palette.mode]);
    let layout = target.startsWith("Auth/") ? "Auth" : "Layout";
    if (layout == "Auth")
        children = (
            <AuthLayout
                useEnterAnimation={previousTarget.current != null}
                target={target}
            >
                {children}
            </AuthLayout>
        );
    else
        children = (
            <ProfileLayout
                useEnterAnimation={previousTarget.current != null}
                target={target}
            >
                {children}
            </ProfileLayout>
        );
    let result = (
        <div>
            <canvas
                key={theme.palette.mode}
                id="layout-animationed-background"
                style={{
                    ...Object.fromEntries(
                        gradientColors.map((c, i) => [
                            `--gradient-color-${i + 1}`,
                            c,
                        ]),
                    ),
                }}
                className="fixed left-0 top-0 -z-10 h-svh w-full"
            ></canvas>
            <motion.div
                className={classes("fixed left-0 top-0 -z-10 h-svh w-full", {
                    "profile-layout-bg": isLight,
                    "profile-layout-bg__dark": !isLight,
                })}
                initial={false}
                animate={{
                    opacity: target.startsWith("Auth/")
                        ? 0
                        : isLight
                          ? 0.85
                          : 1,
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
            <AnimatePresence initial={false} mode="sync">
                <motion.div key={`layout${layout}`}>{children}</motion.div>
            </AnimatePresence>
        </div>
    );
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
