import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: any;
}

export const Sidebar: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box w="200px" h="100vh" overflow="scroll">
      {children}
    </Box>
  );
};

Sidebar.defaultProps = {};
