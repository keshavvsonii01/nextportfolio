"use client"

import React, { useState } from "react";

const Skills = () => {
  const [active, setActive] = useState(null);

  const skills = [
    {
      id: "01",
      title: "FRONTEND",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Preact",
        "Tailwind CSS",
      ],
    },
    {
      id: "02",
      title: "BACKEND",
      skills: [
        "C# / .NET",
        "Node.js",
        "Express",
        "REST APIs",
        "JWT",
      ],
    },
    {
      id: "03",
      title: "DATA",
      skills: [
        "MSSQL",
        "MongoDB",
        "Snowflake",
        "SQL",
        "SQLite",
      ],
    },
    {
      id: "04",
      title: "AI / GENAI",
      skills: [
        "OpenAI",
        "Gemini",
        "Claude",
        "LLM Integration",
        "Prompt Engineering",
      ],
    },
  ];

  const toggleActive = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-20 text-center">
          <p className="text-sm tracking-[0.25em] text-neutral-500">
            ENGINEERING
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Built across the stack.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-400">
            I work across the layers that turn ideas into production software.
          </p>
        </div>

        {/* =========================================================
            DESKTOP SYSTEM
        ========================================================= */}

        <div className="relative mx-auto hidden min-h-[700px] max-w-5xl items-center justify-center md:flex">

          {/* Horizontal connection line */}
          <div
            className={`absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-1/2 transition-all duration-500 ${
              active
                ? "bg-white/30 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                : "bg-white/10"
            }`}
          />

          {/* Vertical connection line */}
          <div
            className={`absolute bottom-[10%] left-1/2 top-[10%] w-px -translate-x-1/2 transition-all duration-500 ${
              active
                ? "bg-white/30 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                : "bg-white/10"
            }`}
          />

          {/* ================= CENTER NODE ================= */}

          <div
            className={`relative z-20 flex h-44 w-44 flex-col items-center justify-center rounded-full border bg-black text-center transition-all duration-500 ${
              active
                ? "border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                : "border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            }`}
          >

            <span className="mt-2 text-xl font-semibold">
              KESHAV
            </span>

            <span className="mt-1 text-[10px] tracking-[0.18em] text-neutral-400">
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* ================= FRONTEND ================= */}

          <SkillNode
            item={skills[0]}
            position="top-0 left-1/2 -translate-x-1/2"
            active={active}
            setActive={setActive}
            toggleActive={toggleActive}
            connector="bottom"
          />

          {/* ================= BACKEND ================= */}

          <SkillNode
            item={skills[1]}
            position="right-0 top-1/2 -translate-y-1/2"
            active={active}
            setActive={setActive}
            toggleActive={toggleActive}
            connector="left"
          />

          {/* ================= DATA ================= */}

          <SkillNode
            item={skills[2]}
            position="bottom-0 left-1/2 -translate-x-1/2"
            active={active}
            setActive={setActive}
            toggleActive={toggleActive}
            connector="top"
          />

          {/* ================= AI ================= */}

          <SkillNode
            item={skills[3]}
            position="left-0 top-1/2 -translate-y-1/2"
            active={active}
            setActive={setActive}
            toggleActive={toggleActive}
            connector="right"
          />
        </div>

        {/* =========================================================
            MOBILE SYSTEM
        ========================================================= */}

        <div className="relative flex flex-col items-center md:hidden">

          {/* Main mobile spine */}
          <div
            className={`absolute bottom-12 top-12 left-1/2 w-px -translate-x-1/2 transition-all duration-500 ${
              active
                ? "bg-white/30 shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                : "bg-white/10"
            }`}
          />

          {/* ================= MOBILE CENTER ================= */}

          <div
            className={`relative z-20 flex h-36 w-36 flex-col items-center justify-center rounded-full border bg-black text-center transition-all duration-500 ${
              active
                ? "border-white/50 shadow-[0_0_45px_rgba(255,255,255,0.2)]"
                : "border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            }`}
          >
            <span className="text-xs tracking-[0.25em] text-neutral-500">
              BUILD
            </span>

            <span className="mt-2 text-lg font-semibold">
              KESHAV
            </span>

            <span className="mt-1 text-[9px] tracking-[0.15em] text-neutral-400">
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* Connector */}
          <div className="relative z-10 h-10 w-px bg-white/10" />

          {/* ================= MOBILE SKILLS ================= */}

          {skills.map((item, index) => {
            const isActive = active === item.id;

            return (
              <React.Fragment key={item.id}>

                <div
                  onClick={() => toggleActive(item.id)}
                  className={`relative z-20 w-full max-w-sm cursor-pointer rounded-2xl border p-6 backdrop-blur transition-all duration-500 ${
                    isActive
                      ? "scale-[1.02] border-white/50 bg-white/[0.08] shadow-[0_0_35px_rgba(255,255,255,0.15)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >

                  {/* Number */}
                  <span className="text-xs tracking-[0.2em] text-neutral-500">
                    {item.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`mt-2 text-base font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-neutral-300"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full px-2.5 py-1 text-[11px] transition-all duration-300 ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-white/5 text-neutral-400"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Active indicator */}
                  <div
                    className={`absolute -bottom-[5px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]"
                        : "bg-white/20"
                    }`}
                  />
                </div>

                {/* Connector between cards */}
                {index !== skills.length - 1 && (
                  <div
                    className={`relative z-10 h-10 w-px transition-all duration-500 ${
                      isActive
                        ? "bg-white/30 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                        : "bg-white/10"
                    }`}
                  />
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* ================= FOOTER LABEL ================= */}

        <div className="mt-20 text-center">
          <p className="text-sm tracking-[0.18em] text-neutral-500">
            FRONTEND · BACKEND · DATA · AI
          </p>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   DESKTOP SKILL NODE
========================================================= */

const SkillNode = ({
  item,
  position,
  active,
  setActive,
  toggleActive,
  connector,
}) => {
  const isActive = active === item.id;

  const connectorClasses = {
    bottom:
      "-bottom-[25px] left-1/2 h-6 w-px -translate-x-1/2",
    top:
      "-top-[25px] left-1/2 h-6 w-px -translate-x-1/2",
    left:
      "left-[-25px] top-1/2 h-px w-6 -translate-y-1/2",
    right:
      "right-[-25px] top-1/2 h-px w-6 -translate-y-1/2",
  };

  return (
    <div
      className={`absolute ${position}`}
      onMouseEnter={() => setActive(item.id)}
      onMouseLeave={() => setActive(null)}
      onClick={() => toggleActive(item.id)}
    >
      <div
        className={`relative w-56 cursor-pointer rounded-2xl border p-6 backdrop-blur transition-all duration-500 lg:w-60 ${
          isActive
            ? "scale-[1.04] border-white/50 bg-white/[0.08] shadow-[0_0_40px_rgba(255,255,255,0.16)]"
            : "border-white/10 bg-white/[0.03] hover:border-white/25"
        }`}
      >

        {/* Number */}
        <span className="text-xs tracking-[0.2em] text-neutral-500">
          {item.id}
        </span>

        {/* Title */}
        <h3
          className={`mt-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            isActive
              ? "text-white"
              : "text-neutral-300"
          }`}
        >
          {item.title}
        </h3>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full px-2.5 py-1 text-[11px] transition-all duration-300 ${
                isActive
                  ? "bg-white/15 text-white"
                  : "bg-white/5 text-neutral-400"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Connector light */}
        <div
          className={`absolute ${connectorClasses[connector]} transition-all duration-500 ${
            isActive
              ? "bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]"
              : "bg-white/10"
          }`}
        />
      </div>
    </div>
  );
};

export default Skills;