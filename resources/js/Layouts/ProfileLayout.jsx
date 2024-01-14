import MainMenu from "../Components/MainMenu";
import WordSenseLogo from "../Components/WordSenseLogo";
import { cubicBezier } from "framer-motion";
import { motion } from "framer-motion";
import classes from "classnames";
import { useTheme } from "@emotion/react";

export default function ProfileLayout({ children, useEnterAnimation }) {
    let theme = useTheme();
    let isLight = theme.palette.mode == "light";
    return (
        <div className="container relative mx-auto h-full min-h-svh">
            <motion.div
                className={classes(
                    "transform-[translate(0%,-21%)] absolute -z-10 h-full w-full opacity-50 blur-[200px]",
                    {
                        "mix-blend-plus-lighter": isLight,
                        "bg-white": isLight,
                        "mix-blend-darken": !isLight,
                        "bg-[#0d0f1f]": !isLight,
                    },
                )}
                initial={
                    !useEnterAnimation
                        ? false
                        : {
                              opacity: 0,
                              transform: "scale(0) translate(0%, -21%)",
                          }
                }
                animate={{
                    opacity: isLight ? 0.5 : 0,
                    transform: "scale(1) translate(0%, -21%)",
                }}
                exit={{
                    transform: "scale(0) translate(0%, -21%)",
                    transition: { duration: 10 },
                }}
                transition={{
                    duration: 1,
                    ease: cubicBezier(0.02, 0.725, 0.3, 0.995),
                }}
            >
                <div
                    className={classes(
                        "absolute left-[-215px] top-[-75px] block h-[500px] w-[500px]",
                        {
                            "bg-white": isLight,
                            "bg-[#0d0f1f]": !isLight,
                        },
                    )}
                ></div>
            </motion.div>
            <motion.div
                className="grid h-full w-full grid-rows-[auto_minmax(0,_1fr)]"
                initial={!useEnterAnimation ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    transition: { duration: 1 },
                }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeIn" }}
            >
                <div className="flex items-start gap-6 pt-6">
                    <WordSenseLogo className="w-[250px]" />
                    <MainMenu />
                </div>
                <div>{children}</div>
            </motion.div>
        </div>
    );
}
