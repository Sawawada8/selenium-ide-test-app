import React from 'react';

import {
  Box,
  Avatar,
  Flex,
  Center,
  Stack,
  Text,
  Heading,
  WrapItem,
} from '@chakra-ui/react';

interface Props {
  userName: string;
  userRole: string;
  imgURL?: string;
}

export const ListHead: React.FC<Props> = ({
  userName,
  userRole,
  imgURL,
}: Props) => {
  return (
    <>
      <Box
        w="220px"
        h="80px"
        bgColor="black"
        position="fixed"
        color="white"
        borderBottom="1px"
        borderColor="gray.500"
        _hover={{ bg: 'gray.700' }}
      >
        <Stack>
          <Flex>
            <Center h="80px" mx={3}>
              <Avatar src={imgURL} />
            </Center>
            <Center>
              <Box>
                <Heading as="h2" size="lg">
                  {userName}
                </Heading>
                <Text>{userRole}</Text>
              </Box>
            </Center>
          </Flex>
        </Stack>
      </Box>
      <Box h="80px"></Box>
    </>
  );
};

ListHead.defaultProps = {
  imgURL: 'https://bit.ly/dan-abramov',
};
