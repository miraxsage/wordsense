import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
export default function Profile({ name }) {
    return (
        <MainLayout>
            <div
                style={{
                    padding: "5px 8px",
                    background: "red",
                    color: "white",
                }}
            >
                {"<Profile>: " + name}
            </div>
        </MainLayout>
    );
}
