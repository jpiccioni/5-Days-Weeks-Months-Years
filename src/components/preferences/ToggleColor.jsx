import React from 'react'
import { useColorMode, Button } from '@chakra-ui/react'

export default function ToggleColor () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Switch to {colorMode === 'light' ? 'Dark' : 'Light'} mode
      </Button>
    </header>
  )
}
