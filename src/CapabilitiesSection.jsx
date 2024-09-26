import React from "react";
import CapabilitiesCards from "./CapabilitiesCards.jsx";

export default function CapabilitiesSection() {
  return (
    <>
      <div>
        <h2
          style={{
            fontFamily: "Ubuntu",
            fontWeight: 500,
            fontStyle: "inherit",
            margin: "40px auto 20px auto",
            fontSize: "38px",
            letterSpacing: "-0.025em",
            lineHeight: "110%",
            maxWidth: "640px",
            textAlign: "center",
          }}
        >
          Claude’s Capabilities
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "40px 0",
          }}
        >
          <CapabilitiesCards
            src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F917e321db9a92c976731ae620d3a5b2090aa7849-447x446.png&w=1080&q=75"
            heading="Advanced reasoning"
            text="Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation"
          />
          <CapabilitiesCards
            src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F03b379d4ad85f640645d1fcea8e0f961a599b127-447x446.png&w=1080&q=75"
            heading="Vision analysis"
            text="Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs"
          />
          <CapabilitiesCards
            src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4564ee0f071ffb6376a9bb51fb9050d0d6398dbb-447x446.png&w=1080&q=75"
            heading="Code generation"
            text="Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases"
          />
          <CapabilitiesCards
            src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fcfc775a807665b1478f0e3047b28363dfb146c93-447x446.png&w=1080&q=75"
            heading="Multilingual processing"
            text="Translate between various languages in real-time, practice grammar, or create multi-lingual content"
          />
        </div>
      </div>
    </>
  );
}
