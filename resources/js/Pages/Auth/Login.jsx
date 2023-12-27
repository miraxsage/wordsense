import { router, usePage } from "@inertiajs/react";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Link from "../../Components/Link";
import MainLayout from "../../Layouts/MainLayout";

export default function Login({ status }) {
    let [data, setData] = useState({ email: "", password: "" });
    function submit(e) {
        e.preventDefault();
        router.post("/login", { ...data });
    }
    function input(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    let errors = usePage().props.errors;
    return (
        <MainLayout>
            <div className="grid items-center justify-items-center h-svh w-svw">
                <form className="relative flex flex-col gap-4 sm:w-6/12 w-9/12 max-w-[350px]">
                    <div className="overlap"></div>
                    <TextField error={!!errors.email} helperText={errors.email} size="small" name="email" onChange={input} label="login" variant="filled" className="mb-2 w-full" />        
                    <TextField error={!!errors.password} helperText={errors.password} size="small" type="password" name="password" label="password" onChange={input} variant="filled" className="mb-2" />
                    <Button variant="contained" color="primary" onClick={submit} className="self-center px-8">Войти</Button>
                    <div className="mt-10">
                        <Typography variant="body1" className="inline" color="gray">Haven't you registered yet? / </Typography>
                        <Link href={route("register")}>Registation</Link>
                        <br/>
                        <Typography variant="body1" className="inline" color="gray">Forgot password? / </Typography>
                        <Link href={route("password.forgot")}>Restoration</Link>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
