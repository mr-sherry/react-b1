import React from 'react';

// SimpleCircleSpinner.jsx
// A tiny, accessible React spinner component using plain CSS (no Tailwind).
// Default export a React component. Props are documented below.

/**
 * Props:
 * - size: number | string (px) - spinner width/height. Default: 24
 * - thickness: number - circle stroke width. Default: 2
 * - styleColor: string - direct CSS color string for the stroke. Default: currentColor
 * - speed: number - seconds per rotation. Default: 1
 * - label: string - accessible label for screen readers. Default: "Loading"
 * - className: string - extra class names for the svg wrapper
 */

export default function SimpleCircleSpinner({
  size = 24,
  thickness = 2,
  styleColor = undefined,
  speed = 1,
  label = 'Loading',
  className = '',
}) {
  // Accept numeric size or string (e.g. '2rem')
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  // Inline color style overrides currentColor
  const strokeColorStyle = styleColor ? { color: styleColor } : undefined;

  return (
    <>
      <style>{`
        @keyframes scs-spin {
          100% { transform: rotate(360deg); }
        }
        .scs-spinner {
          display: inline-block;
          animation-name: scs-spin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .scs-track {
          opacity: 0.2;
        }
      `}</style>

      <svg
        role='img'
        aria-label={label}
        className={`scs-spinner ${className}`}
        style={{
          width: sizeValue,
          height: sizeValue,
          animationDuration: `${speed}s`,
          ...strokeColorStyle,
        }}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden={label ? 'false' : 'true'}
      >
        {/* Background track (faint) */}
        <circle
          className='scs-track'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth={thickness}
          fill='none'
        />

        {/* Animated arc */}
        <path
          d='M22 12a10 10 0 0 1-10 10'
          stroke='currentColor'
          strokeWidth={thickness}
          strokeLinecap='round'
          fill='none'
        />
      </svg>
    </>
  );
}

/* Usage examples:

// Basic (uses current text color)
<SimpleCircleSpinner />

// Larger, slower
<SimpleCircleSpinner size={40} speed={1.5} />

// Using hex color directly
<SimpleCircleSpinner size={32} styleColor="#ff6b6b" />

*/
