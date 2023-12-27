import { router } from "@inertiajs/react";
import { Link } from "@mui/material";

export default function({method, data, headers, ...props}){
    function onClick(e){
        e.preventDefault();
        router.visit(props.href, { method, data, headers })
    }
    return <Link {...props} onClick={onClick} />;
}