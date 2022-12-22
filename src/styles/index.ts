import { extendTheme, withDefaultSize } from '@chakra-ui/react'

const customTheme = {}

const newTheme = extendTheme(customTheme, withDefaultSize({ size: 'sm' }))

export default newTheme
