import { Center, Stack, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Center height="100vh" as="main" p={4}>
      <Stack>
        <Heading data-cy="heading" as="h1" size="lg">
          Nest.js with Charkra UI
        </Heading>
      </Stack>
    </Center>
  )
}
