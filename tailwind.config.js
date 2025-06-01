/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        'notion': ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'vscode-bg': '#1e1e1e',
        'vscode-sidebar': '#252526',
        'vscode-blue': '#007acc',
        'terminal-green': '#4ade80',
        'terminal-bg': '#0d1117',
        'notion-gray': '#37352f',
      }
    },
  },
  plugins: [],
} 