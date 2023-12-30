import { useForm } from "@inertiajs/react";
import AuthLayout, { useOnAuthSubmit } from "../../Layouts/AuthLayout";
import { Button, TextField, Typography } from "@mui/material";
import Link from "../../Components/Link";
import MainLayout from "../../Layouts/MainLayout";


function Register({ ...props }) {
    let { data, setData, errors, setError, post } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    function input(field, label, type = "text") {
        return <TextField
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
    }
    function onSignup(e) {
        e.preventDefault();
        post("/register", { ...data });
    }
    useOnAuthSubmit()(onSignup);
    return (
        //<AuthLayout onSubmit={onSignup}>
        <>
            {input("name", "Имя")}
            {input("email", "E-mail")}
            {input("password", "Пароль")}
            {input("password_confirmation", "Повторите пароль")}
            <Button type="submit" variant="contained" className="self-center px-8">Зарегистрироваться</Button>
            <div className="mt-10">
                <Typography variant="body1" className="inline" color="gray">Have you already registered? / </Typography>
                <Link href={route("login")}>Login</Link>
            </div>
        </>
        //</AuthLayout>
    );
}


export default Register;