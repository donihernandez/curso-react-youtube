/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {
    fontFamily: {
      'display': ['Anton', ..._fontFamily.sans],
      'body': ['Inter', ..._fontFamily.serif],
    },
  }
}
export const plugins = []
