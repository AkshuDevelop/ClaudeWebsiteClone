import React from "react";

export default function TalkToClaude() {
  return (
    <>
      <div
        style={{
          boxSizing: "inherit",
          gridColumnStart: "1",
          gridColumnEnd: "span 12",
          overflow: "hidden",
        }}
      >
        <div style={{ boxSizing: "inherit" }}>
          <div
            style={{
              boxSizing: "inherit",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                boxSizing: "inherit",
                aspectRatio: "1 / 1",
                position: "relative",
                width: "50%",
              }}
            >
              <img
                height={411}
                width={584}
                src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fb8a504669acafa29d533762857c374cd7c2ad912-2112x1488.png&w=3840&q=75"
                style={{
                  boxSizing: "inherit",
                  verticalAlign: "middle",
                  borderRadius: "24px",
                  height: "auto",
                  left: "50%",
                  maxHeight: "calc(100% - 48px*1)",
                  maxWidth: "calc(100% - 48px*1)",
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "auto",
                  color: "transparent",
                }}
              />
            </div>
            <div style={{ boxSizing: "inherit", width: "calc(50% - 32px*.5)" }}>
              <h2
                style={{
                  boxSizing: "inherit",
                  fontFamily: "Ubuntu",
                  fontFeatureSettings: '"pnum", "lnum", "liga"',
                  fontWeight: 500,
                  marginBottom: "0px",
                  marginTop: "0px",
                  fontSize: "clamp(1.25rem, 1.67vw, 1.5rem)",
                  letterSpacing: "-0.0225em",
                  lineHeight: "125%",
                }}
              >
                Take Claude with you
              </h2>
              <div
                style={{
                  boxSizing: "inherit",
                  fontSize: "clamp(1rem, 1.39vw, 1.2rem)",
                  letterSpacing: "-0.005em",
                  lineHeight: "145%",
                  marginTop: "12px",
                }}
              >
                <p
                  style={{
                    boxSizing: "inherit",
                    marginBottom: "0px",
                    marginTop: "0px",
                    fontSize: "clamp(1rem, 1.39vw, 1.2rem)",
                    letterSpacing: "-0.005em",
                    lineHeight: "145%",
                  }}
                >
                  Talk to Claude, anywhere you go. Brainstorm ideas, get
                  answers, and analyze images on the go. The Claude apps put the
                  power of frontier intelligence in your back pocket.
                </p>
              </div>
              <div
                style={{
                  boxSizing: "inherit",
                  gap: "24px",
                  display: "flex",
                  marginTop: "24px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
