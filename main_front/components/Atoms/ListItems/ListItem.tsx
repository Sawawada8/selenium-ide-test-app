import React from 'react';
import { Box } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

interface Props {
  Icon: any;
  name: string;
  link?: string;
}

export const ListItem = ({ Icon, name, link }: Props) => {
  const enter = (e: any) => {
    e.target.style.opacity = 0.7;
  };
  const leave = (e: any) => {
    e.target.style.opacity = 1;
  };
  return (
    <Box
      bg="tomato"
      w="100%"
      p={3}
      mt={2}
      mb={2}
      color="white"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {Icon}
      {name}
    </Box>
  );
};

ListItem.defaultProps = {
  Icon: <AddIcon w={6} h={6} mr={3} />,
  name: 'default',
};
