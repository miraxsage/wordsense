import { router, usePage } from "@inertiajs/react";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import Link from "../../Components/CustomLink";
import { useOnAuthSubmit } from "../../Layouts/AuthLayout";
import AuthTextField from "../../Components/AuthTextField";
import { useTheme } from "@emotion/react";
import LanguageToggler from "../../Components/LanguageToggler";
import ColorModeToggler from "../../Components/ColorModeToggler";

function Login({ status }) {
    let theme = useTheme();
    let [data, setData] = useState({ email: "", password: "" });
    function submit(e) {
        e.preventDefault();
        router.visit(route("profile"));
        return;
        router.post("/login", { ...data });
    }
    useOnAuthSubmit()(submit);
    function input(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    let errors = usePage().props.errors;
    return (
        <>
            <AuthTextField
                error={!!errors.email}
                helperText={errors.email}
                size="small"
                name="email"
                onChange={input}
                label="login"
                variant="filled"
                className="mb-2 w-full"
            />
            <AuthTextField
                error={!!errors.password}
                helperText={errors.password}
                size="small"
                type="password"
                name="password"
                label="password"
                onChange={input}
                variant="filled"
                className="mb-2"
            />
            <Button
                type="submit"
                color={theme.palette.mode == "dark" ? "contrast" : "primary"}
                variant={theme.palette.mode == "dark" ? "outlined" : "contained"}
                className="self-center px-8"
            >
                Войти
            </Button>
            <div className="mt-10">
                <Typography variant="body1" className="inline" color="contrast.main">
                    Haven't you registered yet? /{" "}
                </Typography>
                <Link href={route("register")}>Registation</Link>
                <br />
                <Typography variant="body1" className="inline" color="contrast.main">
                    Forgot password? /{" "}
                </Typography>
                <Link href={route("password.forgot")}>Restoration</Link>
            </div>
            <div className="mt-[40px] space-x-2 text-center">
                <LanguageToggler />
                <ColorModeToggler />
            </div>
        </>
    );
}

export default Login;
