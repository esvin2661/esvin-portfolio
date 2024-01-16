"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import GitHubContributions from "./components/GitHubContributions";
import ProjectSection from "./components/ProjectSection";
import PhotoSection from "./components/PhotoSection";
import SkillsPage from "./technologies/page";
import './globals.css'; 


const scrolltosection = (sectionId: string) => {
  if (typeof window !== 'undefined') {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const Home = () => {
  return (
    <div className="smooth-scrolling">
      {/* Include other components as needed */}
      <HeroSection/>
      <GitHubContributions />
      <SkillsPage />
      <div className="projects" id="projects">
        <ProjectSection />
      </div>
      <div className="photos" id="photos">
        <PhotoSection />
      </div>
    </div>
  );
};

export default Home;