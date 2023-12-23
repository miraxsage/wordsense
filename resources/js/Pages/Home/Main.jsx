import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
export default function Main({ name }) {
    return (
        <MainLayout>
            <div
                style={{
                    padding: "5px 8px",
                    background: "blue",
                    color: "white",
                }}
            >
                {"<Main>: " + name}
            </div>
        </MainLayout>
    );
}
