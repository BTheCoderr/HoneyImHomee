import React from 'react';

/**
 * Botanical vine line-art divider matching the Honey, I'm Home logo.
 * Use between sections for a hand-drawn, artisanal feel.
 */
const SectionDivider = ({ className = '' }) => (
  <div className={`flex justify-center py-8 sm:py-12 ${className}`} aria-hidden="true">
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-honey-sage/60"
    >
      {/* Botanical vine - wavy organic line */}
      <path
        d="M0 12 Q30 4, 60 12 Q90 20, 120 12"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Small leaves/accents along the vine */}
      <circle cx="20" cy="10" r="1.5" fill="currentColor" />
      <circle cx="60" cy="12" r="1.5" fill="currentColor" />
      <circle cx="100" cy="14" r="1.5" fill="currentColor" />
    </svg>
  </div>
);

export default SectionDivider;
