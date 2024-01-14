import { router } from "@inertiajs/react";
import { Button, Link } from "@mui/material";

export default function CustomLink({ href, method, data, headers, as = "Link", ...props }) {
    function onClick(e) {
        e.preventDefault();
        if (href == -1) window.history.back();
        else router.visit(href, { method, data, headers });
    }
    return as == "Link" ? (
        <Link {...props} onClick={onClick} />
    ) : (
        <Button {...props} onClick={onClick} />
    );
}
