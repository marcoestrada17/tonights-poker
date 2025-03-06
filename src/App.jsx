import {
  Box,
  ClientOnly,
  HStack,
  Skeleton,
  VStack,
} from "@chakra-ui/react"
import { ColorModeToggle } from "./components/color-mode-toggle"
import CardList from './components/CardList'
import PokerTable from './components/PokerTable'

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <HStack gap="10">
        <PokerTable />
        </HStack>


        <HStack>
          <CardList />
        </HStack>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  )
}