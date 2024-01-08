import { router, usePage } from "@inertiajs/react";
import { Button, TextField, Typography, alpha } from "@mui/material";
import { useState } from "react";
import Link from "../../Components/Link";
import MainLayout from "../../Layouts/MainLayout";
import { grey } from "@mui/material/colors";
import AuthLayout, { useOnAuthSubmit } from "../../Layouts/AuthLayout";
import AuthTextField from "../../Components/AuthTextField";

function Login({ status }) {
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
       // <AuthLayout onSubmit={submit}>
       <>
            <AuthTextField error={!!errors.email} helperText={errors.email} size="small" name="email" onChange={input} label="login" variant="filled" className="mb-2 w-full"
            
            
            />        
            <AuthTextField error={!!errors.password} helperText={errors.password} size="small" type="password" name="password" label="password" onChange={input} variant="filled" className="mb-2" />
            <Button type="submit" variant="contained" className="self-center px-8">Войти</Button>
            <div className="mt-10">
                <Typography variant="body1" className="inline" color="gray">Haven't you registered yet? / </Typography>
                <Link href={route("register")}>Registation</Link>
                <br/>
                <Typography variant="body1" className="inline" color="gray">Forgot password? / </Typography>
                <Link href={route("password.forgot")}>Restoration</Link>
            </div>
        </>
       // </AuthLayout>
    );
}


export default Login;