import { useTheme } from "@emotion/react";

export function useIsLighMode() {
    let theme = useTheme();
    return theme.palette.mode == "light";
}
