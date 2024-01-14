import { Button, Menu, MenuItem, Tooltip } from "@mui/material";
import ru from "./Russian.svg";
import en from "./English.svg";
import { useRef, useState } from "react";
import classes from "classnames";
import { useIsLighMode } from "../../Utilities/ServiceHooks";

export default function LanguageButton({ onChange }) {
    let [opened, setOpened] = useState(false);
    let isLightMode = useIsLighMode();
    let iconRef = useRef();
    let changeHandler = (lang) => {
        return () => {
            setOpened(false);
            if (onChange) onChange(lang);
        };
    };
    let clickHandler = () => {};
    return (
        <>
            <Tooltip title="Выбрать язык">
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
                        src={en}
                    />
                </Button>
            </Tooltip>
            <Menu
                id="language-menu"
                className="mt-2"
                anchorEl={iconRef.current}
                open={opened}
                onClose={() => setOpened(false)}
                onClick={clickHandler}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            >
                <MenuItem onClick={changeHandler("en")}>
                    <img className="mr-3 w-[25px]" src={en} />
                    English
                </MenuItem>
                <MenuItem onClick={changeHandler("en")}>
                    <img className="mr-3 w-[25px]" src={ru} />
                    Russian
                </MenuItem>
            </Menu>
        </>
    );
}
