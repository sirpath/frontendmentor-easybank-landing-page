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
        specific: '#F0F0F0',
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
      dark: {
        ...daisyuiThemes['[data-theme=dark]'],
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
    darkTheme: 'dark',
    logs: false,
  },
}

export default config
