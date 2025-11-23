import { useEffect, useState } from 'react';

interface ColorSection {
  offset: number;
  color: string;
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

// Helper function to interpolate between two colors
function interpolateColor(color1: string, color2: string, factor: number): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));

  return `rgb(${r}, ${g}, ${b})`;
}

export function useScrollColor(sections: ColorSection[]) {
  const [backgroundColor, setBackgroundColor] = useState(sections[0]?.color || '#0f172a');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          const maxScroll = documentHeight - windowHeight;
          const scrollPercentage = maxScroll > 0 ? scrollPosition / maxScroll : 0;

          // Find the two sections we're between
          let currentSection = sections[0];
          let nextSection = sections[1] || sections[0];
          let localProgress = 0;

          for (let i = 0; i < sections.length - 1; i++) {
            if (scrollPercentage >= sections[i].offset && scrollPercentage < sections[i + 1].offset) {
              currentSection = sections[i];
              nextSection = sections[i + 1];

              // Calculate progress between these two sections
              const sectionRange = nextSection.offset - currentSection.offset;
              const progressInSection = scrollPercentage - currentSection.offset;
              localProgress = sectionRange > 0 ? progressInSection / sectionRange : 0;
              break;
            }
          }

          // If we're past the last section, use the last color
          if (scrollPercentage >= sections[sections.length - 1].offset) {
            currentSection = sections[sections.length - 1];
            nextSection = sections[sections.length - 1];
            localProgress = 1;
          }

          // Interpolate between current and next color
          const interpolatedColor = interpolateColor(
            currentSection.color,
            nextSection.color,
            localProgress
          );

          setBackgroundColor(interpolatedColor);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return backgroundColor;
}
