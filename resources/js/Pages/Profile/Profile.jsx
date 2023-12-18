import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
function Profile({ name }) {
    return (
        <div
            style={{
                padding: "5px 8px",
                background: "red",
                color: "white",
            }}
        >
            {"<Profile>: " + name}
        </div>
    );
}
Profile.layout = MainLayout;
export default Profile;
