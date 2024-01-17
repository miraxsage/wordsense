import { useForm } from "@inertiajs/react";
import { useOnAuthSubmit } from "../../Layouts/AuthLayout";
import { Button, Typography } from "@mui/material";
import Link from "../../Components/CustomLink";
import AuthTextField from "../../Components/AuthTextField";
import { useTheme } from "@emotion/react";

function Register() {
    let theme = useTheme();
    let { data, setData, errors, post } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    function input(field, label, type = "text") {
        return (
            <AuthTextField
                type={type}
                name={field}
                value={data[field]}
                onChange={(e) => setData(field, e.target.value)}
                error={Boolean(errors[field])}
                helperText={errors[field]}
                size="small"
                label={label}
                variant="filled"
                className="mb-2 w-full"
            />
        );
    }
    function onSignup(e) {
        e.preventDefault();
        post("/register", { ...data });
    }
    useOnAuthSubmit()(onSignup);
    return (
        <>
            {input("name", __("Name"))}
            {input("email", "E-mail")}
            {input("password", __("Password"))}
            {input("password_confirmation", __("Retype password"))}
            <Button
                type="submit"
                color={theme.palette.mode == "dark" ? "contrast" : "primary"}
                variant={theme.palette.mode == "dark" ? "outlined" : "contained"}
                className="self-center px-8"
            >
                {__("Register up")}
            </Button>
            <div className="mt-10">
                <Typography variant="body1" className="inline" color="contrast.main">
                    {__("Have you already registered?")} /{" "}
                </Typography>
                <Link href={route("login")}>{__("Go to Login page")}</Link>
            </div>
        </>
    );
}

export default Register;
