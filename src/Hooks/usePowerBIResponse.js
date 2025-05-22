import React, { useEffect, useState } from "react";

function usePowerBIResponse() {
  const [response, setResponse] = useState(null);
  const _reportid = import.meta.env.VITE_REPORT_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const powerbiresponse = await fetch(
          "https://localhost:7215/PowerBI/reportConfiguration?reportId=" +
            _reportid
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
