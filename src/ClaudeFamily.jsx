import React from "react";

export default function ClaudeFamily() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "repeat(10, 48px)",
        columnGap: "32px",
        margin: "auto",
        marginBottom: "200px",
        width: "80%",
        height: "80%",
        padding: "24px",
        position: "relative",
      }}
    >
      <div
        style={{
          gridColumn: "1 / 5",
          gridRow: "5 / -1",
          borderRadius: "24px",
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgb(250, 250, 248)",
          zIndex: 10,
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <div style={{ padding: "48px", width: "50%" }}>
            <div
              style={{
                lineHeight: "120%",
                fontSize: "0.875rem",
                background: "rgb(217, 119, 87)",
                borderRadius: "12px",
                padding: "5px 12px",
                color: "rgb(255, 255, 255)",
                display: "inline-block",
              }}
            >
              Light & fast
            </div>
            <h2
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 500,
                lineHeight: "1em",
                margin: "18px 0 0 0",
              }}
            >
              Haiku
            </h2>
            <div style={{ lineHeight: "145%", marginTop: "12px" }}>
              <p
                style={{
                  margin: "0",
                  fontFamily: "Ubuntu",
                  fontSize: "14px",
                  lineHeight: "145%",
                }}
              >
                Our fastest model that can execute lightweight actions, with
                industry-leading speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          gridColumn: "1 / 9",
          gridRow: "3 / -1",
          borderRadius: "24px",
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgb(240, 239, 234)",
          zIndex: 9,
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <div style={{ padding: "48px", width: "50%" }}>
            <div
              style={{
                lineHeight: "120%",
                fontSize: "0.875rem",
                background: "rgb(217, 119, 87)",
                borderRadius: "12px",
                padding: "5px 12px",
                color: "rgb(255, 255, 255)",
                display: "inline-block",
                marginLeft: "12%",
              }}
            >
              Hard-working
            </div>
            <h2
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 500,
                lineHeight: "1em",
                marginTop: "10px",
                marginLeft: "13%",
              }}
            >
              Sonnet
            </h2>
            <div style={{ lineHeight: "145%", marginTop: "12px" }}>
              <p
                style={{
                  marginLeft: "13%",
                  fontFamily: "Ubuntu",
                  fontSize: "14px",
                  lineHeight: "145%",
                }}
              >
                Our best combination of performance and speed for efficient,
                high-throughput tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
          borderRadius: "24px",
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgb(230, 228, 221)",
          zIndex: 8,
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <div style={{ padding: "48px", width: "33.33%" }}>
            <div
              style={{
                lineHeight: "120%",
                fontSize: "0.875rem",
                background: "rgb(217, 119, 87)",
                borderRadius: "12px",
                padding: "5px 12px",
                color: "rgb(255, 255, 255)",
                display: "inline-block",
                marginLeft: "14%",
              }}
            >
              Powerful
            </div>
            <h2
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 500,
                lineHeight: "1em",
                marginLeft: "15%",
              }}
            >
              Opus
            </h2>
            <div
              style={{
                lineHeight: "145%",
                marginTop: "12px",
                marginLeft: "15%",
              }}
            >
              <p
                style={{
                  fontFamily: "Ubuntu",
                  fontSize: "14px",
                  lineHeight: "145%",
                }}
              >
                Our highest-performing model, which can handle complex analysis,
                longer tasks with many steps, and higher-order math and coding
                tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          bottom: "-24px",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          left: "0",
          right: "0",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.003em",
            lineHeight: "100%",
            background: "rgb(250, 250, 248)",
            position: "absolute",
            zIndex: 10,
          }}
        >
          Cost
        </span>
      </div>
      <div
        style={{
          bottom: "-24px",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          alignItems: "center",
          left: "0",
          right: "auto",
          top: "0",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.003em",
            lineHeight: "100%",
            textTransform: "uppercase",
            background: "rgb(250, 250, 248)",
            position: "absolute",
            zIndex: 10,
            padding: "16px 8px",
            transform: "rotate(180deg)",
            writingMode: "vertical-rl",
          }}
        >
          Intelligence
        </span>
      </div>
    </div>
  );
}
