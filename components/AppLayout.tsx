import { ChakraProvider, HStack, Text, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import NextLink from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <ChakraProvider>
      <main>
        <NavBar />
        {children}
        <Footer>
          <HStack>
            <Text>
              Follow us on{" "}
              <Link
                as={NextLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/copyboost"
                textColor={"blue.300"}
              >
                Twitter
              </Link>
            </Text>
          </HStack>
        </Footer>
      </main>
    </ChakraProvider>
  );
}
