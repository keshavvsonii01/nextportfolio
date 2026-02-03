'use client';

import React from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section className="w-full py-32 px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl md:text-7xl font-bold uppercase mb-4">
          Selected Work
        </h2>
        <p className="text-neutral-400 max-w-xl">
          A few projects that showcase my approach to SaaS UI and conversion-focused design.
        </p>
      </div>

      {/* Projects Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col gap-40">

        {/* Project 1 — IdeaGenie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Project Image */}
          <div className="w-full transition-transform duration-300 ease-in-out">
            {/* Replace with Image / Screenshot */}
            <Image src = "/images/IdeaGen2.png" alt="IdeaGenie Project Screenshot" width={640} height={400} className="aspect-[16/10] bg-neutral-900 rounded-xl ring-2 ring-white/25" />
          </div>

          {/* Project Content */}
          <div className="flex flex-col gap-6">
            <span className="text-sm uppercase tracking-wide text-neutral-500">
              SaaS Web Application
            </span>

            <h3 className="text-3xl md:text-4xl font-semibold">
              IdeaGenie
            </h3>

            <p className="text-neutral-300 text-lg">
              “An AI-assisted SaaS web app for generating structured, ready-to-use content ideas in seconds.”
            </p>

            <p className="text-neutral-400">
              Designed and built the frontend with a focus on clarity, performance, and intuitive user flow.
              The interface prioritizes quick input, readable output, and distraction-free usage.
            </p>

            <div className="text-sm text-neutral-500">
              <span className="block">Role: UI design, Frontend development, Backend Development</span>
              <span className="block">Stack: Next.js · Tailwind · Gemini API</span>
            </div>

            <div>
              <a
                target="_blank"
                href="https://ideagen-gold.vercel.app/"
                className="inline-block mt-4 text-white underline underline-offset-4"
              >
                View Live →
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 — Digital Agency Dummy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Project Content */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <span className="text-sm uppercase tracking-wide text-neutral-500">
              Landing Page
            </span>

            <h3 className="text-3xl md:text-4xl font-semibold">
              DigitalQ Agency
            </h3>

            <p className="text-neutral-300 text-lg">
              A conversion-focused landing page designed to turn visitors into qualified leads for digital agencies.
            </p>

            <p className="text-neutral-400">
              Built as a focused SaaS-style landing page with clear messaging, strong visual hierarchy,
              and performance-first frontend practices.
            </p>

            <div className="text-sm text-neutral-500">
              <span className="block">Role: UI design, Frontend development</span>
              <span className="block">Stack: Next.js · Tailwind</span>
            </div>

            <div>
              <a
                target="_blank"
                href="https://digitalqagency.vercel.app/"
                className="inline-block mt-4 text-white underline underline-offset-4"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="w-full order-1 md:order-2">
            {/* Replace with Image / Screenshot */}
            <Image src = "/images/DigitalQ.png" alt="DigitalQ Project Screenshot" width={640} height={400} className="aspect-[16/10] bg-neutral-900 rounded-xl ring-2 ring-white/25" />
          </div>
        </div>
      </div>
    </section>
  );
}