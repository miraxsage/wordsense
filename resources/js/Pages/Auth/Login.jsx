import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

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
        <form>
            <input type="text" onChange={input} name="email" />
            <br />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            <input type="password" onChange={input} name="password" />
            <br />
            {errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
            )}
            <br />
            <button type="submit" onClick={submit}>
                Войти
            </button>
            <br />
            <Link href={route("register")}>Haven't you registered yet?</Link>/
            <Link href={route("password.forgot")}>Forgot password?</Link>
        </form>
    );
}
