import Header from "./Header";
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";

export default function BaseContainer({ children }) {
  return (
    <Box pos="relative" minH="120vh">
      <Header />
      <Box w="50%" m="0 auto" pb="5rem">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
