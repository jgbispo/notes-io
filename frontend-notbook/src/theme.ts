import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'
import '@fontsource/raleway'
import '@fontsource/open-sans'


const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
    roboto: `'Roboto, sans-serif'`
  },
})

export default theme
