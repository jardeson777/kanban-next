import Head from "next/head";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import { Box, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban Next</title>
        <meta name="description" content="Kanban Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex>
          <Menu />
          <Box
            background="blue.400"
            width="80vw"
            borderRadius="20px 0 0 20px "
          ></Box>
        </Flex>
      </main>
    </>
  );
}
