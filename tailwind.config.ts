import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        primary: 'hsl(233, 26%, 24%)',
        secondary: 'hsl(233, 8%, 62%)',
        'light-grayish': 'hsl(220, 16%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',

      },
      backgroundImage: {
        'mobile-banner': 'url(./images/bg-intro-mobile.svg)',
        'desktop-banner': 'url(./images/bg-intro-desktop.svg)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {
        ...daisyuiThemes['[data-theme=cmyk]'],
        /*
        primary: '', // dominant color.
        secondary: '', // less dominant but still distinguishable.
        accent: '', // draw attention, notifications, highlighted text
        neutral: '', // shades of blacks, grays, and whites. don't convey a specific mood or emotion on their own.
        'base-100': '', // base backgrounds color.
        'base-content': '', // base content color.
        */
      },

    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
