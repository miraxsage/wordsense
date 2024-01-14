import CustomLink from "../../Components/CustomLink";

export default function Main({ name }) {
    return (
        <>
            <div
                style={{
                    padding: "5px 8px",
                    background: "blue",
                    color: "white",
                }}
            >
                {"<Main>: " + name}
            </div>
            <CustomLink href={route("login")} as="Button" variant="outlined">
                Войти
            </CustomLink>
        </>
    );
}
