import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { Button, Tooltip } from "@mui/material";
import classes from "classnames";
import { useColorMode } from "../Layouts/ColorModeContextProvider";

export default function ColorModeToggler() {
    let [mode, setMode] = useColorMode();
    let isLightToggler = mode != "light";
    let clickHandler = () => {
        setMode(isLightToggler ? "light" : "dark");
    };
    return (
        <Tooltip title={isLightToggler ? "Включить светлый режим" : "Включить темный режим"}>
            <Button
                color="contrast"
                sx={{ minWidth: "0px", padding: "4px" }}
                className={classes(
                    isLightToggler ? "hover:text-[#e2ca7e]" : "hover:text-[#5a4793]",
                    "transition-colors",
                )}
                variant="text"
                size="small"
                onClick={clickHandler}
            >
                {isLightToggler ? (
                    <LightModeIcon fontSize="medium" />
                ) : (
                    <Brightness4OutlinedIcon fontSize="medium" />
                )}
            </Button>
        </Tooltip>
    );
}
