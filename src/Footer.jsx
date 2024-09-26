import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#141413",
        color: "#a3a299",
        fontFamily: "Ubuntu",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          padding: "48px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          columnGap: "32px",
          margin: "auto",
        }}
      >
        <div
          style={{
            gridColumnStart: "1",
            gridColumnEnd: "span 1",
            width: "45.4px",
          }}
        >
          <span>
            <svg
              className="icon"
              height="32"
              width="46"
              viewBox="0 0 46 32"
              style={{
                boxSizing: "inherit",
                display: "inline-block",
                fill: "currentcolor",
                flexShrink: 0,
                verticalAlign: "middle",
                height: "auto",
                width: "100%",
              }}
            >
              <path
                d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z"
                fill="currentColor"
                style={{ boxSizing: "inherit" }}
              />
            </svg>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridColumnStart: "5",
            gridColumnEnd: "span 6",
            columnGap: "32px",
          }}
        >
          <ul style={{ gridColumnStart: "1", gridColumnEnd: "span 2" }}>
            <li>Claude</li>
            <li>API</li>
            <li>Team</li>
            <li>Pricing</li>
            <li>Research</li>
            <li>Company</li>
            <li>Customers</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
          <ul style={{ gridColumnStart: "3", gridColumnEnd: "span 2" }}>
            <li>Press Inquiries</li>
            <li>Support</li>
            <li>Status</li>
            <li>Availability</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
          <ul style={{ gridColumnStart: "5", gridColumnEnd: "span 2" }}>
            <li>Terms of Service – Consumer</li>
            <li>Terms of Service – Commercial</li>
            <li>Privacy Policy</li>
            <li>Usage Policy</li>
            <li>Responsible Disclosure Policy</li>
            <li>Compliance</li>
            <li>Privacy Choices</li>
          </ul>
        </div>
        <div
          style={{
            gridColumnStart: "11",
            gridColumnEnd: "span 2",
            textAlign: "right",
          }}
        >
          <div>© 2024 Anthropic PBC</div>
        </div>
      </div>
    </footer>
  );
}
