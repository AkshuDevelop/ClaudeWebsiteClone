import React from "react";

export default function Button(props) {
  return (
    <>
      <a
        className="PrimaryBtn"
        href="#"
        rel="noopener"
        style={
          props.black
            ? {
                boxSizing: "inherit",
                borderRadius: "12px",
                margin: "5px",
                padding: "18px 32px 19px",
                textDecoration: "none",
                alignItems: "center",
                backgroundColor: "rgb(20, 20, 19)",
                color: "rgb(250, 250, 248)",
                display: "inline-flex",
                fontFamily: "Ubuntu",
                justifyContent: "center",
                opacity: 1,
                transform: "translateY(0px)",
              }
            : {
                boxSizing: "inherit",
                textDecorationSkipInk: "none",
                textUnderlineOffset: "0.07em",
                outline: "0px",
                border: "1px solid rgb(20, 20, 19)",
                borderRadius: "12px",
                padding: "18px 32px",
                textDecoration: "none",
                margin: "5px",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "rgb(20, 20, 19)",
                display: "inline-flex",
                fontFamily: "Ubuntu",
                justifyContent: "center",
                transition:
                  "opacity 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s, transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s",
                opacity: 1,
                transform: "translateY(0px)",
                transitionDelay: "0.8s",
              }
        }
      >
        <span
          className="btn-label"
          style={{
            boxSizing: "inherit",
            overflow: "hidden",
            display: "inline-block",
            position: "relative",
          }}
        >
          {props.text}
        </span>
      </a>
    </>
  );
}
