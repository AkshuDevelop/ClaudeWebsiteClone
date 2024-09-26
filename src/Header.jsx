import React from "react";

function Header() {
  return (
    <>
      <header
        style={{
          backgroundColor: "#FAFAF8",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1340px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "64px",
            paddingRight: "64px",
            width: "100%",
            zIndex: 1,
            minHeight: "72px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "16px",
              position: "relative",
              width: "143px",
            }}
          ></div>
          <nav style={{ alignItems: "center", display: "flex" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                height: "48px",
                marginRight: "32px",
                position: "relative",
              }}
            >
              <span
                style={{
                  textDecoration: "none",
                  color: "#3A3935",
                  pointerEvents: "all",
                  position: "relative",
                }}
              >
                Claude
              </span>

              <div
                style={{
                  background: "#FFF",
                  borderRadius: "8px",
                  overflow: "hidden",
                  padding: "10px 16px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 6px",
                  display: "none",
                  flexDirection: "column",
                  left: "-16px",
                  opacity: 0,
                  pointerEvents: "none",
                  position: "absolute",
                  top: "39px",
                }}
              >
                <span
                  style={{
                    textDecoration: "none",
                    color: "#141413",
                    pointerEvents: "all",
                    lineHeight: "180%",
                  }}
                >
                  Overview
                </span>
              </div>
            </div>
            <span
              style={{
                textDecoration: "none",
                color: "#3A3935",
                pointerEvents: "all",
                position: "relative",
                marginRight: "32px",
              }}
            >
              Research
            </span>
            <span
              style={{
                textDecoration: "none",
                color: "#3A3935",
                pointerEvents: "all",
                position: "relative",
                marginRight: "32px",
              }}
            >
              Company
            </span>
            <span
              style={{
                textDecoration: "none",
                color: "#3A3935",
                pointerEvents: "all",
                position: "relative",
                marginRight: "32px",
              }}
            >
              Careers
            </span>
            <span
              style={{
                textDecoration: "none",
                color: "#3A3935",
                pointerEvents: "all",
                position: "relative",
              }}
            >
              News
            </span>
            <div
              style={{
                overflow: "hidden",
                alignItems: "center",
                display: "inline-flex",
                height: "48px",
                maxWidth: "0px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#141413",
                  justifyContent: "center",
                  pointerEvents: "all",
                  borderRadius: "12px",
                  padding: "11px 20px 13px",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                  color: "#FAFAF8",
                  display: "inline-flex",
                  marginLeft: "32px",
                  opacity: 0,
                  visibility: "hidden",
                }}
              >
                Try Claude
              </span>
            </div>
          </nav>
        </div>
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html {
          scroll-padding-top: 72px;
          margin: 0;
          color: #141413;
          width: 100%;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }
        body {
          box-sizing: inherit;
          min-height: 100vh;
          font-size: 16px;
          margin: 0;
          color: #141413;
          width: 100%;
          background-color: #FAFAF8;
        }
      `,
        }}
      />
    </>
  );
}

export default Header;
