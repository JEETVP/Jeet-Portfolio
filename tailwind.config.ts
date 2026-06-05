import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0A',
        ivory: '#F4F1EA',
        charcoal: '#2A2926',
        taupe: '#A69C8F',
        burgundy: '#5A1F2B',
        dustgold: '#B59A6A',
        texture: '#D8D2C8'
      },
      boxShadow: {
        soft: '0 24px 70px rgba(11, 11, 10, 0.12)'
      },
      backgroundImage: {
        paper: 'radial-gradient(circle at top left, rgba(181, 154, 106, 0.06), transparent 32%), radial-gradient(circle at bottom right, rgba(42, 41, 38, 0.05), transparent 26%), repeating-linear-gradient(180deg, rgba(244, 241, 234, 0.03), rgba(244, 241, 234, 0.03) 1px, transparent 1px, transparent 6px)'
      }
    }
  },
  plugins: []
};

export default config;
