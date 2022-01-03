import React from 'react';

import { Box, Grid as ChakraGrid } from '@chakra-ui/react';

interface Props {
  children: any;
}

export const Grid: React.FC<Props> = ({ children }: Props) => {
  return (
    <ChakraGrid
      templateColumns={{
        sm: 'repeat(1,1fr)',
        md: 'repeat(2,1fr)',
        lg: 'repeat(3,1fr)',
        xl: 'repeat(4,1fr)',
      }}
      gap={3}
      p={2}
    >
      {children}
    </ChakraGrid>
  );
};

Grid.defaultProps = {};
