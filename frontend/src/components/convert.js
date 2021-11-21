import { useState } from "react";
import KissDataService from "../services/kiss.js";

function Convert() {
    const currentUrl = window.location.href;
    const [longUrl, setLongUrl] = useState("");
    const [result, setResult] = useState("");

    const handleInputChange = event => {
        setLongUrl(event.target.value);
    }

    const kissUrl = () => {
        KissDataService.create(longUrl)
        .then(res => {
            setResult(res.data);
            setLongUrl("");
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
            >
                KISS it now!
            </button>
            {
                result !== "" ? (
                    <div className="m-5">
                        <h3>YOUR URL HAVE BEEN KISS'ED!</h3>
                        <label>KISS Url: </label>
                        <pre>{currentUrl+result.code}</pre>
                        
                        <label>Original Url: </label>
                        <pre>{result.longUrl}</pre>
                    </div>
                ) : null
            }
        </div>   
    );
}

export default Convert;