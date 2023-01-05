import { Stack, StackProps } from "@chakra-ui/react";

export const MainContent = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    // mt="-60vh"
    pt="2rem"
    px="1rem"
    {...props}
  />
);
