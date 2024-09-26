import React from "react";
import NewsCard from "./NewsCard";

export default function CompanyNews() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0efea",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "20px",
          marginTop: "60px",
        }}
      >
        <h2
          style={{
            fontFamily: "Ubuntu",
            fontWeight: 500,
            fontSize: "2.25rem",
            color: "#141413",
            margin: 0,
          }}
        >
          Company News
        </h2>
        <a
          href="#"
          style={{
            fontFamily: "Ubuntu",
            fontSize: "1rem",
            textDecoration: "none",
            color: "#141413",
            transition: "color 0.2s",
          }}
        >
          Show All
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <NewsCard
          heading="Products . Announcements"
          text="Introducing Contextual Retrieval"
          date="Jan 23, 2024"
        />
        <NewsCard
          heading="Announcements"
          text="Salesforce teams up with Anthropic to enhance Einstein capabilities with Claude"
          date="Sep 3, 2024"
        />
        <NewsCard
          heading="Announcements"
          text="Aug Artifacts are now generally available, 2024"
          date="Aug 7, 2024"
        />
      </div>
    </div>
  );
}
