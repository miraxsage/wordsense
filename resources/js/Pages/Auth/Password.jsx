import { useForm } from "@inertiajs/react";
import { useOnAuthSubmit } from "../../Layouts/AuthLayout";
import { Alert, Button } from "@mui/material";
import Link from "../../Components/CustomLink";
import AuthTextField from "../../Components/AuthTextField";
import { useTheme } from "@emotion/react";

export default function Password({ mode = "request", email, token, success }) {
    let theme = useTheme();
    let { data, setData, errors, post } = useForm({
        email: email ?? "",
        password: "",
        password_confirmation: "",
    });
    function send(e) {
        e.preventDefault();
        if (mode == "request") {
            post(route("password.forgot"), { ...data });
        } else if (mode == "reset") {
            post(route("password.reset", { token }), { ...data });
        }
    }
    useOnAuthSubmit()(send);
    function input(field, label, type = "text", readOnly = false, helperText = "") {
        return (
            <AuthTextField
                type={type}
                name={field}
                value={data[field]}
                onChange={(e) => setData(field, e.target.value)}
                error={Boolean(errors[field])}
                helperText={errors[field] ?? helperText}
                size="small"
                label={label}
                variant="filled"
                className="mb-2 w-full"
                readOnly={readOnly}
            />
        );
    }
    return success ? (
        <>
            <Alert variant="outlined" severity="success">
                {success}
            </Alert>
            {mode == "request" && (
                <Link href="/" as="Button" variant="outlined">
                    Go to Home page
                </Link>
            )}
            {mode == "reset" && <Link href={route("login")}>Go to Login page</Link>}
        </>
    ) : (
        <>
            {input(
                "email",
                "E-mail",
                "text",
                mode != "request",
                "Укажите Ваш E-mail, на который будет отправлено письмо для восстановления пароля",
            )}
            {mode == "reset" && (
                <>
                    {input("password", "Пароль")}
                    {input("password_confirmation", "Повторите пароль")}
                </>
            )}
            <div className="flex justify-center gap-2">
                <Link
                    href={-1}
                    as="button"
                    color={theme.palette.mode == "dark" ? "contrast" : "primary"}
                    className="self-center px-8"
                >
                    Назад
                </Link>
                <Button
                    type="submit"
                    color={theme.palette.mode == "dark" ? "contrast" : "primary"}
                    variant={theme.palette.mode == "dark" ? "outlined" : "contained"}
                    className="self-center px-8"
                >
                    Отправить
                </Button>
            </div>
        </>
    );
}
