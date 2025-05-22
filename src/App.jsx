import React, { useState, useEffect } from "react";
import usePowerBIResponse from "./Hooks/usePowerBIResponse";
import { PowerBIEmbed } from "powerbi-client-react";
import "./App.css";

import { models } from "powerbi-client";

function App() {
  const data = usePowerBIResponse();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna and paginated report
          id: data["reportId"],
          embedUrl: data["embeddedUrl"],
          accessToken: data["token"], // Keep as empty string, null or undefined
          tokenType: models.TokenType.Embed,
        }}
      />
    </>
  );
}

export default App;
