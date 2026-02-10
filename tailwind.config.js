/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Honey, I'm Home - Brand Style Guide (exact hex codes)
        'honey': {
          rose: '#D8A7A7',       // Primary - Dusty Rose (mixing bowl logo)
          'rose-deep': '#c49595',
          'rose-muted': '#eddddc',
          sage: '#8A9A5B',      // Secondary - Sage Green (botanical leaves)
          'sage-deep': '#6b7a48',
          'sage-muted': '#c5d4b8',
          cream: '#FDFBF7',     // Warm Cream (menu flyers background)
          'cream-warm': '#faf8f4',
          'cream-textured': '#f7f4ef',
          lavender: '#E6E6FA',  // Accent - Soft Lavender (dividers/textures)
          charcoal: '#333333',   // Primary body text
          'charcoal-light': '#5a5a5a',
        },
        // Legacy aliases
        'honey-stone': '#333333',
        'honey-stone-light': '#5a5a5a',
        'honey-charcoal': '#333333',
        'honey-charcoal-light': '#5a5a5a',
      },
      fontFamily: {
        // Brand typography
        sans: ['Open Sans', 'Quicksand', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Great Vibes', 'Dancing Script', 'cursive'],
        display: ['Montserrat', 'Josefin Sans', 'Quicksand', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'brand': '0.2em',
        'brand-tight': '0.1em',
        'brand-wide': '0.25em',
      },
      boxShadow: {
        'cozy': '0 4px 20px rgba(216, 167, 167, 0.18)',
        'cozy-lg': '0 8px 32px rgba(216, 167, 167, 0.22)',
        'sage': '0 4px 20px rgba(138, 154, 91, 0.25)',
        'soft': '0 2px 12px rgba(51, 51, 51, 0.06)',
      },
      backgroundImage: {
        'cream-texture': 'radial-gradient(ellipse at top, rgba(253, 251, 247, 0.95) 0%, rgba(247, 244, 239, 1) 100%)',
        'cream-subtle': 'linear-gradient(180deg, #FDFBF7 0%, #faf8f4 100%)',
        'lavender-fade': 'linear-gradient(90deg, transparent, rgba(230, 230, 250, 0.3), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'soft-pulse': 'softPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
