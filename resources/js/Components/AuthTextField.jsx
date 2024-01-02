import styled from "@emotion/styled";
import { TextField, alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

export default styled(TextField)(({theme}) => ({
    "&:hover .MuiFilledInput-root, & .MuiFilledInput-root, & .MuiFilledInput-root.Mui-focused": {
        background: alpha(grey[300], 0.2),
    },
    "&:hover .MuiFilledInput-root": {
        background: alpha(grey[200], 0.1),
    }
}));