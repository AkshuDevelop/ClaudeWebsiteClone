import React from "react";

const NewsCard = ({ heading, text, date }) => {
  return (
    <a
      href="#"
      style={{
        textDecoration: "none",
        color: "#141413",
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "350px",
        height: "200px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",

        marginRight: "2%",
        marginTop: "40px",
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: "Ubuntu",
            fontWeight: "initial",
            fontSize: "1rem",
            margin: "8px 0",
            color: "#141413",
          }}
        >
          {heading}
        </h3>
        <p
          style={{
            fontFamily: "Ubuntu",
            fontWeight: 500,
            margin: "12px 0",
            fontSize: "1.5rem",
          }}
        >
          {text}
        </p>
      </div>
      <div
        style={{
          marginTop: "12px",
          fontSize: "1rem",
          color: "#A3A299",
          fontFamily: "Ubuntu",
        }}
      >
        {date}
      </div>
    </a>
  );
};

export default NewsCard;
