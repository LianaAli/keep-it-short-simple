import { useEffect, useState } from "react";
import KissDataService from "../services/kiss.js";
import { useParams } from "react-router-dom";

function Redirect() {
    const { code } = useParams();
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        redirectToLongUrl(code);
    }, [code])

    const redirectToLongUrl = code => {
        KissDataService.get(code)
        .then(response => {
            window.location.href = response.data.longUrl;
        })
        .catch(error => {
            setIsError(true);
        })
    }

    return (
        <div>
            {
                isError ? (
                    <div className="m-5">
                        <h3>YOUR URL HASN'T BEEN KISS'ED YET!</h3>
                        <label>Oooppppsss! This URL does not exists in our system! :(</label>
                    </div>
                ) : (
                    <div>
                        <div className="spinner-border" role="status" />
                        <div>Redirecting...</div>
                    </div>
                )
            }
            
        </div>
    );
}

export default Redirect;