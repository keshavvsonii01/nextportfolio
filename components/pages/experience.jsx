"use client"


import { useState } from "react";

const Experience = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      step: "01",
      title: "UNIPER",
      desc: "Role: Software Engineer Trainee",
      desc2: "Duration: August 2025 - August 2026",

      points: [
        "Frontend Engineering",
        "Backend & API Development",
        "Enterprise Systems",
      ],

      details:
        "Worked across frontend and backend systems for enterprise applications, building features, reusable components, services, and end-to-end workflows used by 100+ employees daily.",

      techstack: [
        "Preact",
        "TypeScript",
        "C#",
        ".NET",
        "REST APIs",
        "MSSQL",
        "Azure",
        "Snowflake",
      ],

      keycontributions: [
        "01 — Frontend: Built and integrated 15+ frontend features using Preact and TypeScript, including reusable components, services, and connectors.",
        "02 — Backend: Developed 20+ backend features using C#/.NET and REST APIs, contributing to end-to-end enterprise workflows.",
        "03 — Process Impact: Built features used by 100+ employees daily and contributed to a 30% reduction in manual processing.",
        "04 — Engineering Workflow: Worked within Agile/Scrum teams across 6+ sprint cycles, participating in development and code reviews.",
      ],

      achievements: [
        "15+ FRONTEND FEATURES",
        "20+ BACKEND FEATURES",
        "100+ EMPLOYEES IMPACTED",
      ],
    },

    {
      step: "02",
      title: "KREATIVEVILLA",
      desc: "Role: Full Stack Developer",
      desc2: "Duration: March 2024 - July 2025",

      points: [
        "Product Engineering",
        "AI Integrations",
        "Full-Stack Development",
      ],

      details:
        "Built and shipped production web applications across frontend, backend, AI integrations, and deployment.",

      techstack: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "REST APIs",
        "JavaScript",
        "MongoDB",
        "JWT",
      ],

      keycontributions: [
        "01 — Frontend: Built 4+ production web applications using Next.js and React with SSR/SSG.",
        "02 — Backend: Built MongoDB-backed applications with JWT authentication supporting 50+ concurrent users.",
        "03 — AI Integration: Integrated OpenAI and third-party APIs to automate content workflows, reducing manual effort by 25%.",
        "04 — Deployment: Deployed 4+ applications through Vercel and Netlify using CI/CD workflows.",
      ],

      achievements: [
        "4+ PRODUCTION WEB APPLICATIONS",
        "AI INTEGRATIONS",
        "CI/CD DEPLOYMENTS",
      ],
    },
  ];

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            EXPERIENCE
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Building software in real-world environments.
          </h2>

          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            From frontend features to backend systems, I’ve worked across the
            stack to build, improve, and ship production software.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-24">

            {steps.map((item, index) => {
              const isExpanded = expandedStep === index;

              return (
                <div
                  key={item.step}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >

                  {/* Content */}
                  <div
                    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-white/[0.01] backdrop-blur p-8 ${
                      index % 2 === 0
                        ? "md:col-start-1"
                        : "md:col-start-2"
                    }`}
                  >

                    {/* Step */}
                    <span className="text-3xl font-semibold text-neutral-300">
                      {item.step}
                    </span>

                    {/* Company */}
                    <h3 className="mt-4 text-xl font-semibold">
                      {item.title}
                    </h3>

                    {/* Role */}
                    <p className="mt-3 text-neutral-400">
                      {item.desc}
                    </p>

                    {/* Duration */}
                    <p className="mt-3 text-neutral-400 text-xs">
                      {item.desc2}
                    </p>

                    {/* High-level areas */}
                    <ul className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-neutral-300"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleStep(index)}
                      aria-expanded={isExpanded}
                      className="mt-6 px-2 py-1 rounded-lg text-xs md:text-base hover:scale-101 cursor-pointer transition-transform"
                    >
                      {isExpanded
                        ? "Hide contributions ↑"
                        : "View contributions ↓"}
                    </button>

                    {/* EXPANDED CONTENT */}
                    {isExpanded && (
                      <div className="mt-8 border-t border-white/10 pt-8">

                        {/* Description */}
                        <div>
                          <p className="text-sm leading-7 text-neutral-300">
                            {item.details}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8">
                          <p className="mb-3 text-xs uppercase tracking-wider text-neutral-500">
                            Tech Stack
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.techstack.map((tech) => (
                              <span
                                key={tech}
                                className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Contributions */}
                        <div className="mt-8">
                          <p className="mb-4 text-xs uppercase tracking-wider text-neutral-500">
                            Key Contributions
                          </p>

                          <div className="space-y-4">
                            {item.keycontributions.map((contribution) => (
                              <p
                                key={contribution}
                                className="text-sm leading-7 text-neutral-300"
                              >
                                {contribution}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mt-8">
                          <p className="mb-4 text-xs uppercase tracking-wider text-neutral-500">
                            Impact
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {item.achievements.map((achievement) => (
                              <div
                                key={achievement}
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center"
                              >
                                <span className="text-xs font-medium text-neutral-300">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8">
                    <div className="h-12 w-12 rounded-full border border-white/20 bg-black flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white/80" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 flex justify-center">
          <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 px-8 py-6 backdrop-blur">
            <div>
              <p className="text-lg font-medium">
                Want to see more?
              </p>

              <p className="text-sm text-neutral-400">
                Explore my work and technical projects.
              </p>
            </div>

            <button className="px-6 py-3 rounded-lg text-sm md:text-base bg-white text-black font-medium hover:scale-101 cursor-pointer">
              View Projects →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;