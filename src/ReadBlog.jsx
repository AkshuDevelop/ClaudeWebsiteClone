import React from "react";
import Button from "./Button";

export default function ReadBlog() {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", padding: "0 24px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "1100px",
          backgroundColor: "#fff",
          borderRadius: "24px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          margin: "48px 0",
        }}
      >
        <div style={{ flex: "1", paddingRight: "24px" }}>
          <img
            height={384}
            width={576}
            alt="claude 3.5"
            src="https://www.anthropic.com/_next/image?url=https://www-cdn.anthropic.com/images/4zrzovbb/website/76c9587c5833e3d047b803ba9639eddd4752c3dc-995x800.png&w=2048&q=75"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>

        <div style={{ flex: "2", padding: "24px" }}>
          <div
            style={{
              letterSpacing: "-0.005em",
              lineHeight: "120%",
              fontFamily: "Ubuntu",
              fontFeatureSettings: '"pnum", "lnum", "liga"',
              fontSize: "0.875rem",
              background: "rgb(217, 119, 87)",
              borderRadius: "12px",
              padding: "5px 12px",
              color: "rgb(255, 255, 255)",
              display: "inline-block",
              marginBottom: "12px",
            }}
          >
            NEW
          </div>
          <h2
            style={{
              fontFamily: "Ubuntu",
              fontFeatureSettings: '"pnum", "lnum", "liga"',
              fontWeight: 500,
              margin: "0",
              fontSize: "clamp(1.25rem, 1.67vw, 1.5rem)",
              letterSpacing: "-0.0225em",
              lineHeight: "125%",
            }}
          >
            Introducing Claude 3.5 Sonnet
          </h2>
          <div
            style={{
              fontSize: "clamp(1rem, 1.39vw, 1.2rem)",
              letterSpacing: "-0.005em",
              lineHeight: "145%",
              marginTop: "8px",
            }}
          >
            <p>
              Raising the industry bar for intelligence with the speed and price
              required for high-volume use cases at scale.
            </p>
          </div>
          <Button black={true} text="Read Blog Post" />
        </div>
      </div>
    </section>
  );
}
