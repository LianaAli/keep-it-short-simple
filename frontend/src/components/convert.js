import { useState } from "react";
import KissDataService from "../services/kiss.js";

function Convert() {
  const [longUrl, setLongUrl] = useState("");
  const [isConverted, setIsConverted] = useState(false);

  const handleInputChange = event => {
    setLongUrl(event.target.value);
  }

  const kissUrl = () => {
    KissDataService.create(longUrl)
    .then(response => {
      setIsConverted(true);
      console.log(response.data);
    });
  }

  return (
    <div>
      {
        isConverted ? (
          <div>
            {longUrl}
          </div>
        ) : (
          <div>
            <input 
              type="text" 
              onChange={handleInputChange}
              value={longUrl}
              required
            />
            <button onClick={kissUrl}>KISS!</button>
          </div>
        )
      }
    </div>
  );
}

export default Convert;