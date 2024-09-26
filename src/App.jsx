import React from "react";
import Header from "./Header.jsx";
import ClaudeFirstPage from "./LandingPage.jsx";
import CapabilitiesSection from "./CapabilitiesSection.jsx";
import ReadBlog from "./ReadBlog.jsx";
import ClaudeFamily from "./ClaudeFamily.jsx";
import WhyPage from "./WhyPage.jsx";
import Marquee from "./Marquee.jsx";
import BuildWithClaude from "./BuildWithClaude.jsx";
import TalkToClaude from "./TalkToClaude.jsx";
import CompanyNews from "./CompanyNews.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <ClaudeFirstPage />
      <CapabilitiesSection />
      <ReadBlog />
      <ClaudeFamily />
      <WhyPage />
      <Marquee />
      <BuildWithClaude />
      <TalkToClaude />
      <CompanyNews />
      <Footer />
    </>
  );
}

export default App;
