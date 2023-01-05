import { Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import AppLayout from "../components/AppLayout";
import { Hero } from "../components/Hero";
import { MainContent } from "../components/MainContent";
import { NextPageWithLayout } from "./_app";

const Index: NextPageWithLayout = () => {
  return (
    <VStack>
      <Hero />
      <MainContent>
        <Text>Hi there</Text>
      </MainContent>
    </VStack>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Index;
