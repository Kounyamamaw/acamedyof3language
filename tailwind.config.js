/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Français - Ton Rostandien
        burgundy: '#6b0f1a',
        'dark-burgundy': '#3d0a0f',
        gold: '#d4af37',
        cream: '#f5f1e8',
        parchment: '#fbf8f0',
        'red-accent': '#8b1538',
        
        // Darija - Couleurs marocaines
        'morocco-red': '#c1272d',
        'morocco-green': '#006233',
        'sand': '#e4c9a0',
        'desert': '#d4a373',
        'terracotta': '#c1522a',
        'mint': '#98d8c8',
        
        // Anglais - Couleurs britanniques/académiques
        'oxford-blue': '#002147',
        'cambridge-blue': '#a3c1ad',
        'british-red': '#c8102e',
        'parchment-beige': '#f7f3e9',
        'ink-blue': '#1a2634',
        'sage': '#9caf88',
        
        // Communs
        ink: '#1a1614',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        crimson: ['Crimson Text', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
        lora: ['Lora', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
