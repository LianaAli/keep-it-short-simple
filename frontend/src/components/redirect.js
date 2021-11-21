import { useEffect } from "react";
import KissDataService from "../services/kiss.js";
import { useParams } from "react-router-dom";

function Redirect() {
    const { code } = useParams();

    useEffect(() => {
        redirectToLongUrl(code);
    }, [code])

    const redirectToLongUrl = code => {
        KissDataService.get(code)
        .then(response => {
            window.location.href = response.data.longUrl;
        })
    }

    return (
        <div>
            <div className="spinner-border" role="status" />
            <div>Redirecting...</div>
        </div>
    );
}

export default Redirect;