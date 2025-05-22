import React, { useEffect, useState } from "react";

function usePowerBIResponse() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const powerbiresponse = await fetch(
          "https://localhost:7215/PowerBI/reportConfiguration?reportId=26f0de6b-50e6-4797-ba05-3724dd14b518"
        );
        if (!powerbiresponse.ok) throw new Error("Error on response;");

        const data = await powerbiresponse.json();
        const jsonResponse = {
          reportId: data.reportId,
          embeddedUrl: data.embeddedUrl,
          token: data.token,
        };

        setResponse(jsonResponse);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return response;
}

export default usePowerBIResponse;
