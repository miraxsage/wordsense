import { router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import AuthLayout, { useOnAuthSubmit } from "../../Layouts/AuthLayout";
import { Alert, Button, TextField } from "@mui/material";
import Link from "../../Components/Link";

export default function Password({ mode = "request", email, token, success }) {
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
        return <TextField
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
    }
    return (
        success ? (
            <>
                <Alert variant="outlined" severity="success">
                    {success}
                </Alert>
                {mode == "request" && <Link href="/" as="Button" variant="outlined">Go to Home page</Link>}
                {mode == "reset" && <Link href={route("login")}>Go to Login page</Link>}
            </>
        ) : (
            <>
                {input("email", "E-mail", "text", mode != "request", "Укажите Ваш E-mail, на который будет отправлено письмо для восстановления пароля")}
                {mode == "reset" && (
                    <>
                        {input("password", "Пароль")}
                        {input("password_confirmation", "Повторите пароль")}    
                    </>
                )}
                <div className="flex gap-2 justify-center">
                    <Link href={-1} as="button" className="self-center px-8">Назад</Link>
                    <Button type="submit" variant="contained" className="self-center px-8">Отправить</Button>
                </div>
            </>
        )
    )
}
