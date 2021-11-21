import { useState } from "react";
import KissDataService from "../services/kiss.js";

function Convert() {
    const currentUrl = window.location.href;
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [longUrl, setLongUrl] = useState("");
    const [result, setResult] = useState("");

    const handleInputChange = event => {
        setLongUrl(event.target.value);
        setIsError(false);
        setErrorMsg("");
        setResult("");
    }

    const kissUrl = () => {
        KissDataService.create(longUrl)
        .then(res => {
            setResult(res.data);
            setLongUrl("");
        })
        .catch(err => {
            setIsError(true);

            if(err.request.response){
                setErrorMsg(err.response.data.error);
            } else {
                setErrorMsg("KISS is taking a power nap now! Let's try again shortly!");
            }
        });
    }

    return (
        <div>
            <input 
                className="form-control text-center"
                type="text" 
                placeholder="enter url to be KISS'ed here!"
                onChange={handleInputChange}
                value={longUrl}
                required
            />
            <button 
                className="btn btn-primary m-2"
                onClick={kissUrl}
                disabled={longUrl === ""}
            >
                KISS it now!
            </button>
            {
                result !== "" && !isError ? (
                    <div className="m-5">
                        <h3>YOUR URL HAVE BEEN KISS'ED!</h3>
                        <label>KISS Url: </label>
                        <pre>{currentUrl+result.code}</pre>
                        
                        <label>Original Url: </label>
                        <pre>{result.longUrl}</pre>
                    </div>
                ) : isError ? (
                    <div className="m-5">
                        <h3>YOUR URL DOESN'T WANT TO BE KISS'ED!</h3>
                        <label>{errorMsg}</label>
                    </div>
                ) : null
            }
        </div>   
    );
}

export default Convert;