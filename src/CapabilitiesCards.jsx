import React from "react";

export default function CapabilitiesCards(props) {
  return (
    <>
      <article
        style={{
          boxSizing: "border-box",
          padding: "18px",
          listStyleType: "none",
          textAlign: "center",
          border: "0px  ",
          borderRadius: "12px",
          maxWidth: "310px",
          maxHeight: "390px",
          margin: "auto",
        }}
      >
        <div
          style={{
            margin: "0px auto",
            maxWidth: "80%",
            overflow: "hidden",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <img
            height={173}
            width={230}
            src={props.src}
            alt="Card image"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>

        <h3
          style={{
            fontFamily: '"Arial", sans-serif',
            fontWeight: 600,
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1.5rem",
            lineHeight: "1.2",
          }}
        >
          {props.heading}
        </h3>

        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#555",
            marginBottom: "16px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontStyle: "bold",
              margin: "0",
              padding: "0",
            }}
          >
            {props.text}
          </p>
        </div>
      </article>
    </>
  );
}
