import React from "react";
import Button from "./Button.jsx";

function ClaudeFirstPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "10%",
          padding: "20px",
          maxHeight: "100%",
          maxWidth: "100%",
          minHeight: "90vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            padding: "20px",
          }}
        >
          <h1
            style={{
              letterSpacing: "-0.03em",
              fontFamily: "Ubuntu",
              lineHeight: "110%",
              fontWeight: "bold",
              fontSize: "60px",
              marginBottom: "10px",
              marginTop: "0px",
            }}
          >
            Meet Claude
          </h1>
          <p
            style={{
              fontFamily: "Ubuntu",
              fontSize: "18px",
              letterSpacing: "-0.01em",
              lineHeight: "140%",
              marginBottom: "20px",
              marginTop: "0px",
            }}
          >
            Claude is AI for all of us. Whether you're brainstorming alone or
            building with a team of thousands, Claude is here to help.
          </p>
          <div>
            <Button text="Try Claude" black={true} padding={true} />
            <Button text="Get API Access" black={false} />
          </div>
        </div>
        <div style={{ width: "50%", padding: "20px" }}>
          <img
            src="https://www.anthropic.com/_next/image?url=https://www-cdn.anthropic.com/images/4zrzovbb/website/1c42a8de70b220fc1737f6e95b3c0373637228db-1319x1512.gif&w=3840&q=75"
            srcSet="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1c42a8de70b220fc1737f6e95b3c0373637228db-1319x1512.gif&w=3840&q=75"
            style={{
              maxWidth: "110%",
              objectFit: "cover",
              height: "620px",
              width: "500px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ClaudeFirstPage;
