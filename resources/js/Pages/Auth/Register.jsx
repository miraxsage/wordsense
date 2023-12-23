import { Link, useForm } from "@inertiajs/react";

export default function Register({ ...props }) {
    let { data, setData, errors, setError, post } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    function inputProps(fieldName) {
        return {
            name: fieldName,
            value: data[fieldName],
            onChange: (e) => setData(fieldName, e.target.value),
        };
    }
    function onSignup(e) {
        e.preventDefault();
        post("/register", { ...data });
    }
    function error(field) {
        return (
            errors[field] && <div style={{ color: "red" }}>{errors[field]}</div>
        );
    }
    return (
        <div>
            Имя
            <input type="text" {...inputProps("name")} />
            {error("name")}
            <br />
            Мыло
            <input type="text" {...inputProps("email")} />
            {error("email")}
            <br />
            Пароль
            <input type="password" {...inputProps("password")} />
            {error("password")}
            <br />
            Повторите пароль
            <input type="password" {...inputProps("password_confirmation")} />
            {error("password_confirmation")}
            <br />
            <button type="submit" onClick={onSignup}>
                Зарегистрироваться
            </button>
            <br />
            <Link href={route("login")}>Have you already registered?</Link>
        </div>
    );
}
