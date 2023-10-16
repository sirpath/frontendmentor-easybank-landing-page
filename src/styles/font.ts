import { Public_Sans } from 'next/font/google'

const fontPrimary = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-primary',
})

const useFonts = [fontPrimary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
