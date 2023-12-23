import { Link, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

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
    function inputProps(fieldName) {
        return {
            name: fieldName,
            value: data[fieldName],
            onChange: (e) => setData(fieldName, e.target.value),
        };
    }
    function error(field) {
        return (
            errors[field] && <div style={{ color: "red" }}>{errors[field]}</div>
        );
    }
    return success ? (
        <>
            <div style={{ color: "green" }}>{success}</div>
            {mode == "request" && <Link href="/">Go to Home page</Link>}
            {mode == "reset" && (
                <Link href={route("login")}>Go to Login page</Link>
            )}
        </>
    ) : (
        <form>
            <input
                type="text"
                {...inputProps("email")}
                {...(mode != "request" ? { readOnly: true } : {})}
            />
            <br />
            {error("email")}
            {mode == "reset" && (
                <>
                    Пароль
                    <br />
                    <input type="password" {...inputProps("password")} />
                    {error("password")}
                    <br />
                    Повторите пароль
                    <input
                        type="password"
                        {...inputProps("password_confirmation")}
                    />
                    {error("password_confirmation")}
                </>
            )}
            <button onClick={send} type="submit">
                Send
            </button>
        </form>
    );
}
