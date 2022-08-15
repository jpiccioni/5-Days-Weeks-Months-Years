import React from 'react'
import {
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import ToggleColor from '../preferences/ToggleColor.jsx'
import { SettingsIcon } from '@chakra-ui/icons'

export default function TheDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme="green" variant="ghost" onClick={onOpen}>
        <SettingsIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Site Preferences</DrawerHeader>

          <DrawerBody>
            <FormControl display="flex" size="lg" alignItems="center">
              <FormLabel htmlFor="dark-mode" mb="0">
                Color:
              </FormLabel>
              <ToggleColor />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
