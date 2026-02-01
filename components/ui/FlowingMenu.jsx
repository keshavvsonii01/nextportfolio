'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full">
      <nav className="flex flex-col">
        {items.map((item, idx) => (
          <MenuItem key={idx} text={item.text} link={item.link} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ text, link }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const animationDefaults = { duration: 0.45, ease: 'expo.out' };

  const getEntryDirection = (e, rect) => {
    const y = e.clientY - rect.top;
    return y < rect.height / 2 ? 'top' : 'bottom';
  };

  const handleEnter = (e) => {
    if (!containerRef.current || !overlayRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const from = getEntryDirection(e, rect) === 'top' ? '-100%' : '100%';

    gsap.set(overlayRef.current, { y: from });
    gsap.to(overlayRef.current, { y: '0%', ...animationDefaults });
  };

  const handleLeave = (e) => {
    if (!containerRef.current || !overlayRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const to = getEntryDirection(e, rect) === 'top' ? '-100%' : '100%';

    gsap.to(overlayRef.current, { y: to, ...animationDefaults });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative h-[16vh] flex items-center justify-center overflow-hidden border-b "
    >
      {/* Base text */}
      <a
        href={link}
        className="relative z-10 uppercase font-semibold text-white text-[2.6vh] md:text-[3.2vh]"
      >
        {text}
      </a>

      {/* Hover overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center bg-white z-20 translate-y-full"
      >
        <span className="uppercase font-semibold text-black text-[2.6vh] md:text-[3vh]">
          {text}
        </span>
      </div>
    </div>
  );
}

export default FlowingMenu;