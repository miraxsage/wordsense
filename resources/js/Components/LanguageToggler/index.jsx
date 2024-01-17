import { Button, Menu, MenuItem, Tooltip } from "@mui/material";
import ru from "./Russian.svg";
import en from "./English.svg";
import { useRef, useState } from "react";
import classes from "classnames";
import { useIsLighMode, useLanguage } from "../../Layouts/CustomizationContextProvider";

export default function LanguageButton() {
    let [opened, setOpened] = useState(false);
    let isLightMode = useIsLighMode();
    let [language, setLanguage] = useLanguage();
    let iconRef = useRef();
    let changeHandler = (lang) => {
        return () => {
            setOpened(false);
            setLanguage(lang);
        };
    };
    return (
        <>
            <Tooltip title={__("Choose language")}>
                <Button
                    className={classes(
                        {
                            grayscale: !opened,
                            "brightness-[3]": !opened && isLightMode,
                        },
                        "transition hover:brightness-100 hover:grayscale-0",
                    )}
                    ref={iconRef}
                    sx={{ minWidth: "0px", padding: "5px" }}
                    variant="text"
                    color="contrast"
                    onClick={() => setOpened(true)}
                    aria-controls={opened ? "language-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={opened ? "true" : undefined}
                >
                    <img
                        className={classes("aspect-[1/1] w-[25px] rounded object-cover")}
                        src={{ ru, en }[language]}
                    />
                </Button>
            </Tooltip>
            <Menu
                id="language-menu"
                className="mt-2"
                anchorEl={iconRef.current}
                open={opened}
                onClose={() => setOpened(false)}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            >
                <MenuItem onClick={changeHandler("en")}>
                    <img className="mr-3 w-[25px]" src={en} />
                    English
                </MenuItem>
                <MenuItem onClick={changeHandler("ru")}>
                    <img className="mr-3 w-[25px]" src={ru} />
                    Russian
                </MenuItem>
            </Menu>
        </>
    );
}
