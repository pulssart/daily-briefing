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
        background: '#fafafa',
        surface: '#ffffff',
        'surface-alt': '#f5f5f5',
        border: '#e5e5e5',
        'border-light': '#f0f0f0',
        text: {
          primary: '#1a1a1a',
          secondary: '#666666',
          muted: '#999999',
        },
        accent: {
          primary: '#2563eb',
          'primary-light': '#3b82f6',
          secondary: '#e0e7ff',
        },
        status: {
          success: '#10b981',
          'success-bg': 'rgba(16, 185, 129, 0.08)',
          info: '#2563eb',
          'info-bg': 'rgba(37, 99, 235, 0.08)',
          warning: '#f59e0b',
          'warning-bg': 'rgba(245, 158, 11, 0.08)',
          error: '#dc2626',
          'error-bg': 'rgba(220, 38, 38, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}
