import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Menu = () => {
  return (
    <Flex
      backgroundColor="white"
      height="100vh"
      width="20vw"
      minWidth="240px"
      direction="column"
      alignItems="center"
    >
      <Image src="/LogoKanban.png" alt="Logo" width={136} height={133} />

      <Flex
        flexDirection="column"
        alignItems="baseline"
        justifyContent="space-between"
        height="inherit"
        paddingBottom={30}
      >
        <Flex flexDirection="column" alignItems="baseline" gap={2}>
          <Button fontSize="sm">
            <Image
              src="/dashboardIcon.svg"
              alt="dashboard"
              width={17}
              height={17}
            />
            <Text as="span" paddingLeft={2}>
              Dashboard
            </Text>
          </Button>
          <Button variant="ghost" fontSize="sm">
            <Image
              src="/groupsIcon.svg"
              alt="dashboard"
              width={17}
              height={17}
            />
            <Text as="span" paddingLeft={2}>
              Teams
            </Text>
          </Button>
          <Button variant="ghost" fontSize="sm">
            <Image
              src="/reportIcon.svg"
              alt="dashboard"
              width={15}
              height={15}
            />
            <Text as="span" paddingLeft={2}>
              Reports
            </Text>
          </Button>
          <Button variant="ghost" fontSize="sm">
            <Image
              src="/settingsIcon.svg"
              alt="dashboard"
              width={17}
              height={17}
            />
            <Text as="span" paddingLeft={2}>
              Settings
            </Text>
          </Button>
        </Flex>

        <Button variant="ghost" fontSize="sm">
          <Image src="/logoutIcon.svg" alt="dashboard" width={16} height={16} />
          <Text as="span" paddingLeft={2}>
            Logout
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Menu;
