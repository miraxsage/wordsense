import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
function Main({ name }) {
    return (
        <div
            style={{
                padding: "5px 8px",
                background: "blue",
                color: "white",
            }}
        >
            {"<Main>: " + name}
        </div>
    );
}
Main.layout = MainLayout;
export default Main;
