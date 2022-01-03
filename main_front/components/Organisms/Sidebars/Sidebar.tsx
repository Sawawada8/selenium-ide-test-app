import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: any;
}

export const Sidebar: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box w="220px" h="100vh" m={3} overflow="scroll">
      {children}
    </Box>
  );
};

Sidebar.defaultProps = {};
