'use client';

import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const animatedCount = useRef(0);

  // Split text into paragraphs
  const paragraphs = text.split('\n\n');

  // Flatten words/letters but keep paragraph index
  const elements = paragraphs.flatMap((paragraph, pIndex) => {
    const parts = animateBy === 'words'
      ? paragraph.split(' ')
      : paragraph.split('');

    return parts.map((part, i) => ({
      value: part,
      paragraphIndex: pIndex,
      isLastInParagraph: i === parts.length - 1,
    }));
  });

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform:
        direction === 'top'
          ? 'translate3d(0,5px,0)'
          : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (
              animatedCount.current === elements.length &&
              onAnimationComplete
            ) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <div ref={ref} className={`blur-text ${className}`}>
      {paragraphs.map((_, pIndex) => (
        <p key={pIndex} className="mb-4">
          {springs.map((props, i) => {
            const el = elements[i];
            if (el.paragraphIndex !== pIndex) return null;

            return (
              <animated.span
                key={i}
                style={{
                  ...props,
                  display: 'inline-block',
                  willChange: 'transform, filter, opacity',
                }}
              >
                {el.value}
                {animateBy === 'words' && !el.isLastInParagraph && '\u00A0'}
              </animated.span>
            );
          })}
        </p>
      ))}
    </div>
  );
};

export default BlurText;