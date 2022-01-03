import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

interface Props {
  Icon?: any;
  name?: string;
  link?: string;
}

export const ListItem: React.FC<Props> = ({ Icon, name, link }: Props) => {
  return (
    <Box
      bg="green.200"
      w="100%"
      p={3}
      mt={2}
      mb={2}
      // color="white"
      _hover={{ bg: 'green.300' }}
    >
      {Icon}
      {name}
    </Box>
  );
};

ListItem.defaultProps = {
  Icon: <AddIcon w={6} h={6} mr={3} />,
  name: 'default',
  link: '#',
};
