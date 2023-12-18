import { Link } from "@inertiajs/react";
import { useRef } from "react";

export default function (page) {
    let ref = useRef();
    if (!ref.current) ref.current = 0;
    ref.current++;
    return (
        <div style={{ border: "1px solid black" }}>
            Total renders: {ref.current}
            <header>
                <Link href="/">Home</Link>
                <br />
                <Link href="/profile">Profile</Link>
            </header>
            {page}
        </div>
    );
}
