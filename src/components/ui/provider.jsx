'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { ThemeProvider } from '../../context/ThemeContext'
import { LocaleProvider } from '../../context/LocaleContext'

export function Provider(props) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <ChakraProvider value={defaultSystem}>
          <ColorModeProvider {...props} />
        </ChakraProvider>
      </ThemeProvider>
    </LocaleProvider>
  )
}
