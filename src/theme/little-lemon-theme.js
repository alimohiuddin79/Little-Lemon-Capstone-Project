import { extendTheme } from "@chakra-ui/react";

const colors = {
    "primary-1": "#495E57",
    "primary-2": "#F4CE14",
    "secondary-1": "#EE9972",
    "secondary-2": "#FBDABB",
    "highlight-1": "#EDEFEE",
    "hightlight-2": "#333333"
}

const breakpoints = {
  sm: '392px',
  md: '862px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ colors, breakpoints });

export default theme;