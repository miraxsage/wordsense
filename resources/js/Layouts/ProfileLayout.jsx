import MainMenu from "../Components/MainMenu";
import WordSenseLogo from "../Components/WordSenseLogo";
import { cubicBezier } from "framer-motion";
import { motion } from "framer-motion";

export default function ProfileLayout({children, useEnterAnimation, ...props}){
    return <div className="container relative mx-auto h-full min-h-svh">
        <motion.div 
            className="profile-blur absolute w-full h-full bg-white -z-10" 
            initial={!useEnterAnimation ? false : {opacity:0, transform: "scale(0) translate(0%, -21%)"}}
            animate={{opacity: 0.5, transform: "scale(1) translate(0%, -21%)"}}
            exit={{
                transform: "scale(0) translate(0%, -21%)",
                transition: {duration: 10}
            }}
            transition={{duration: 1, ease: cubicBezier(0.020, 0.725, 0.300, 0.995)}}
        />
        <motion.div
            className="h-full w-full grid grid-rows-[auto_minmax(0,_1fr)]"
            initial={!useEnterAnimation ? false : {opacity: 0}}
            animate={{opacity: 1}}
            exit={{
                opacity: 0,
                transition: {duration: 1}
            }}
            transition={{duration: 1.5, delay: 0.5, ease: "easeIn"}}
        >
            <div className="pt-6 flex items-start gap-6">
                <WordSenseLogo className="w-[250px]" />
                <MainMenu />
            </div>
            <div>
                {children}
            </div>
        </motion.div>
    </div>
}