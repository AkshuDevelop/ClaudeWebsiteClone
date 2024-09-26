import React from "react";
import Button from "./Button";

const logoData = [
  {
    alt: "Asana Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/a05baa48c93cc27d6ae7a0ccff2bed33bd2f911c-240x64.svg",
  },
  {
    alt: "Assembly AI Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/33ac96c7c1586858fefaa21f76ea3d4206eed764-240x64.svg",
  },
  {
    alt: "BCG Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/1e170c9f18cd53fc747dd3ec54f895f3ed3bd74c-240x64.svg",
  },
  {
    alt: "Brave Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/843e2eac4e543d069a257399384f43b9976446bc-240x64.svg",
  },
  {
    alt: "Bridgewater",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/a2e70597e199c8880c79135e6c130177c7fa2ee7-832x556.png",
  },
  {
    alt: "DuckDuckGo Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/f04aace8a9c51847e43f0415153ce3030a2fe707-240x64.svg",
  },
  {
    alt: "GitLab Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/d0df326998ef75cc0c880aaee40eae72b2327ad9-240x64.svg",
  },
  {
    alt: "Jane Street Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/d3fe2ad3866f1064e8081bc578b25122ff63cbfb-240x64.svg",
  },
  {
    alt: "Jasper Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/283f1b07ce26607f9eaae3039be520230278f52c-240x64.svg",
  },
  {
    alt: "LexisNexis Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/7266e545d601b4a22c23e9f2576010c7beab7de1-240x64.svg",
  },
  {
    alt: "Lonely Planet Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/9e6fe31de80018e61b1b13561bcdff5ff2c392ec-240x64.svg",
  },
  {
    alt: "Perplexity Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/e4e4f319f076f8da3e0047b9566d3af14550f157-240x64.svg",
  },
  {
    alt: "Quora Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/d09b689788a75d67b2d798cbe239dd4579507cf9-240x64.svg",
  },
  {
    alt: "Ricoh Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/b070f029a64bb46aeaac51c9c5b16cc5357d5780-240x64.svg",
  },
  {
    alt: "RO Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/222be0f836b6d9d76023fbf7b9952c0390a044ee-240x64.svg",
  },
  {
    alt: "Robin AI Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/ec13a4f3f06fc12736cf55b7f7851a0a891e2386-240x64.svg",
  },
  {
    alt: "SAP Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/8667467a569448663af20c9f8508f315d7056c19-240x64.svg",
  },
  {
    alt: "Scale Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/cbe869fc64368196e4d90370f25703b40b3fb30b-240x64.svg",
  },
  {
    alt: "SKT Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/548d5dfb4f588746bb9e4cafaf20b0eaee399863-240x64.svg",
  },
  {
    alt: "Slack Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/8d605731fb43db63442fa01bdba5523b64971da1-240x64.svg",
  },
  {
    alt: "Sourcegraph Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/ad02393bc1db8333a590cd53ecbaec7d106293d7-240x64.svg",
  },
  {
    alt: "ZoomInfo Logo",
    src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/87a4297d3653718ab8ddf5722ecd1ea475167a9c-240x64.svg",
  },
];

export default function Marquee() {
  return (
    <section
      style={{
        backgroundColor: "white",
        margin: "auto",
        padding: "10px 64px",
        transition: "opacity 0.2s",
        opacity: 1,
        transitionDelay: "1s",
        width: "90%",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontFamily: "Ubuntu",
          fontWeight: 500,
          fontSize: "40px",
          letterSpacing: "-0.025em",
          lineHeight: "110%",
          margin: "0 auto calc(48px*1.25)",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        Leading companies build with Claude
      </h2>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: "140px",
          margin: "0 10px",
          width: "900%",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee 60s linear infinite",
          }}
        >
          {[...logoData, ...logoData].map((logo, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                width: "240px",

                height: "120px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  alt={logo.alt}
                  src={logo.src}
                  style={{
                    width: "100%",
                    maxHeight: "100px",
                    maxWidth: "100px",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "calc(48px*1.25)",
          textAlign: "center",
        }}
      >
        <Button black={false} text="Read Customer Stories" />
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
