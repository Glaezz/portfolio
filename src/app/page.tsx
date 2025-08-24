"use client";
import React, { useEffect, useState } from "react";
import { NavbarComp } from "@/components/app/navbar";
import { useTheme } from "next-themes";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { HackathonCard } from "@/components/hackathon-card";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { theme } = useTheme();
  const [particleColors, setParticleColors] = useState(["#ffffff", "#ffffff"]);
  useEffect(() => {
    if (theme === "dark") {
      setParticleColors(["#ffffff", "#ffffff"]);
    } else {
      setParticleColors(["#000000", "#000000"]);
    }
  }, [theme]);

  const experiences = [
  {
    role: "Software Engineer",
    company: "OneShield Software",
    companyUrl: "https://oneshield.com/",
    period: "Aug 2022 — Present",
    logo: "/companies/oneshield.webp",
  },
  {
    role: "Founder",
    company: "Design and Code",
    companyUrl: "https://designandcode.netlify.app/",
    period: "Jan 2021 — Present",
    logo: "/companies/design-and-code.webp",
  },
  {
    role: "DevOps Engineer",
    company: "Airmedia Nusantara",
    companyUrl: "https://www.linkedin.com/company/pt-air-media-nusantara/",
    period: "Aug 2022 — Sep 2023",
    logo: "/companies/airmedia.webp",
  },
  {
    role: "Game Programmer",
    company: "Airmedia Nusantara",
    companyUrl: "https://www.linkedin.com/company/pt-air-media-nusantara/",
    period: "Aug 2022 — Sep 2023",
    logo: "/companies/airmedia.webp",
  },
];

  return (
    <NavbarComp>
      <div className="mx-auto h-screen bg-white dark:bg-[#0B0B0D]">
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <section className="h-screen flex items-center gap-8 relative z-10">
              <div className="h-screen px-6 sm:px-10 md:px-20  flex flex-col w-full">

                {/* Div 1: Konten perkenalan, tetap di tengah dan rata kiri */}
                <div className="flex flex-col items-start justify-center flex-grow gap-2">
                  <RainbowButton variant={"outline"}>👋 Hello I'am</RainbowButton>
                  <span className='text-4xl md:text-6xl lg:text-7xl font-bold text-primary'>Fieza Rausyan Al Ghifari</span>
                  <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary">Fullstack Developer</span>
                  <p className="mt-4 text-md md:text-lg lg:text-2xl text-primary max-w-3xl">
                    Computer science student and Software engineer. I love building things and helping people. Skilled in fullstack development and interested in the world of AI and Web3.
                  </p>
                </div>

                {/* Div 2: Tombol sosmed, berada di bawah */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between mb-12">
                  <div className="hidden sm:flex gap-4">
                    <a href="https://www.linkedin.com/in/FiezaGhifari/" className="text-primary font-light hover:-translate-y-1 transition">LINKEDIN</a>
                    <a href="https://github.com/fieza" className="text-primary font-light hover:-translate-y-1 transition">GITHUB</a>
                    <a href="https://www.instagram.com/fieza/" className="text-primary font-light hover:-translate-y-1 transition">INSTAGRAM</a>
                  </div>
                  <div className="flex sm:hidden justify-evenly w-full gap-4">
                    <a href="https://www.linkedin.com/in/FiezaGhifari/" className="text-primary font-light hover:-translate-y-1 transition">LINKEDIN</a>
                    <a href="https://github.com/fieza" className="text-primary font-light hover:-translate-y-1 transition">GITHUB</a>
                    <a href="https://www.instagram.com/fieza/" className="text-primary font-light hover:-translate-y-1 transition">INSTAGRAM</a>
                  </div>
                  <div className="hidden sm:block flex-grow hidden md:flex items-center">
                    <div className="flex-grow border-t border-primary"></div>
                    <div className="flex-grow border-t border-primary"></div>
                  </div>
                  <InteractiveHoverButton className="hidden sm:block">Resume</InteractiveHoverButton>
                  <Button className="block sm:hidden w-full rounded-full" >Resume</Button>
                </div>
                
              </div>
              

          </section>
        </FadeContent>
        <section className="w-full bg-white dark:bg-[#0B0B0D] p-6 sm:p-20">
          {/* <RainbowButton variant={"outline"} size={"lg"}>ℹ About Me</RainbowButton> */}
          <div className="w-full flex justify-center items-center mb-10">
            <span className="text-4xl font-bold text-primary ">About Me</span>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-8">
            <div className="sm:w-[30%] flex justify-center items-center">
              <img className="w-2xs h-2xs rounded-full" src="/fieza.jpg" alt="Rounded avatar"></img>
            </div>
            <div className="w-full sm:w-[70%] flex justify-center items-center text-md lg:text-xl">I'am a student at SMK Negeri 2 Surabaya majoring in Software Engineering and have just been accepted into a State University through the National Selection Based on Achievement (SNBP) at the Electronic Engineering Polytechnic Institute of Surabaya in the Informatics Engineering program. I have internship experience as a Game Programmer, DevOps, and competition experience in the field of Web Development. I also have aspirations to work in Software Engineering, particularly in the fields of Backend Development and Machine Learning Engineering.</div>
          </div>
        </section>
        <section className="mx-auto w-full p-6 sm:px-20 py-16 flex flex-col lg:flex-row gap-12">
          {/* Left Sticky Title */}
          <div className="lg:w-[40%] lg:sticky lg:top-36 self-start">
            <div className="mb-4 flex items-center gap-2">
          
              <RainbowButton variant={"outline"}>⚒ Experience</RainbowButton>
            </div>
            <h2 className="text-4xl font-bold mb-4">Working History</h2>
            <p className="text-muted-foreground">
              I have a diverse range of experiences in software development, including internships and freelance projects.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="flex lg:w-[60%] min-h-0 flex-col gap-y-3">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full px-6 sm:px-20 py-16 flex flex-col lg:flex-row gap-12">
          {/* Left Sticky Title */}
          <div className="lg:w-[40%] lg:sticky lg:top-36 self-start">
            <div className="mb-4 flex items-center gap-2">
              <RainbowButton variant={"outline"}>🎓 Education</RainbowButton>
            </div>
            <h2 className="text-4xl font-bold mb-4">Educational Background</h2>
            <p className="text-muted-foreground">
              I have a strong academic background in software engineering, with a focus on both theoretical and practical aspects of the field.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="flex lg:w-[60%] min-h-0 flex-col gap-y-3">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  description={education.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full px-6 sm:px-20 py-16 flex flex-col gap-12">
          <div className="self-start">
            <div className="mb-4 flex items-center gap-2">
              <RainbowButton variant={"outline"}>📁 My Projects</RainbowButton>
            </div>
            <h2 className="text-4xl font-bold mb-4">My Latest Work</h2>
            <p className="text-muted-foreground">
              I have worked on a variety of projects that showcase my skills in software development, particularly in web development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full px-6 sm:px-20  py-16 flex flex-col lg:flex-row gap-12">
          {/* Left Sticky Title */}
          <div className="lg:w-[35%] lg:sticky lg:top-36 self-start">
            <div className="mb-4 flex items-center gap-2">
              <RainbowButton variant={"outline"}>🎖 Competitive</RainbowButton>
            </div>
            <h2 className="text-4xl font-bold mb-4">Competitive Experience</h2>
            <p className="text-muted-foreground text-md lg:text-xl">
              I have participated in various competitions, showcasing my skills in software development and problem-solving.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="flex lg:w-[65%] min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
          </div>
        </section>
        <section className="w-full flex flex-col justify-center items-center p-6 sm:p-20">
          <RainbowButton variant={"outline"} size={"lg"}>Contact</RainbowButton>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 mt-4">Get in Touch</h2>
          <p className="text-muted-foreground text-md sm:text-xl text-center max-w-xl">
            I would like to hear suggestions for new projects and opportunities. Whether it's full-time opportunities, freelance projects, or technical consulting, feel free to contact me.
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <a className="text-muted-foreground hover:text-primary" href="https://www.linkedin.com/in/FiezaGhifari" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1920 1920"><path fillRule="evenodd" d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"/></svg>
            </a>
            <a className="text-muted-foreground hover:text-primary" href="https://github.com/glaezz" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 sm:w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 192"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/></svg>
            </a>
            <a className="fill-muted-foreground hover:fill-primary" href="https://www.instagram.com/glaezz_/" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 sm:w-6 " viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a className="fill-muted-foreground hover:fill-primary" href="https://wa.me/6285295006927" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 sm:w-6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
            <a className="text-muted-foreground hover:text-primary" href="mailto:fiezarausyan@gmail.com">
              <svg className="w-5 sm:w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </section>
        <footer className="w-full flex justify-between items-center p-6 sm:px-20 bg-background">
          <span className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Fieza Rausyan Al Ghifari. All rights reserved.
          </span>
          <div className="hidden sm:flex justify-center items-center gap-4 mt-8">
            <a className="text-muted-foreground hover:text-primary" href="https://www.linkedin.com/in/FiezaGhifari" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1920 1920"><path fillRule="evenodd" d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"/></svg>
            </a>
            <a className="text-muted-foreground hover:text-primary" href="https://github.com/glaezz" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 192"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/></svg>
            </a>
            <a className="fill-muted-foreground hover:fill-primary" href="https://www.instagram.com/glaezz_/" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 " viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a className="fill-muted-foreground hover:fill-primary" href="https://wa.me/6285295006927" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 " viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
            <a className="text-muted-foreground hover:text-primary" href="mailto:fiezarausyan@gmail.com">
              <svg className="w-5 h-5 " fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </footer>
      </div>
    </NavbarComp>
  );
}
