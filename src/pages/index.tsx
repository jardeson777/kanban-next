import Head from "next/head";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import { Flex } from "@chakra-ui/react";
import Dashboard from "@/components/containersPage/Dashboard";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { TaskProvider } from "@/hooks/useTasks";

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
          <Flex
            background="blue.500"
            width="80vw"
            borderRadius="20px 0 0 20px"
            padding="50px"
            flex={1}
          >
            <DndProvider backend={HTML5Backend}>
              <TaskProvider>
                <Dashboard />
              </TaskProvider>
            </DndProvider>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
