/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend:{
        colors: {
            'dark':'#171823',
            "dark-blue":"#25273D",
            "indicatorColor": "#5B5E7E"
        },
        backgroundImage: {
            "hero-image": "url('/images/bg-desktop-dark.jpg')",
            "mountains": "url('/images/bg-desktop-light.jpg')"
        },
      },
    },
    plugins: [],
  }
