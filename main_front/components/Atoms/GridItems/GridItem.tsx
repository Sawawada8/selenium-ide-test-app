import React from 'react';
import { Box, Grid, GridItem as ChakraGridItem } from '@chakra-ui/react';

interface Props {
  title: string;
  link: string;
  colSpan?: number;
}

export const GridItem: React.FC<Props> = ({ title, link, colSpan }: Props) => {
  return (
    <ChakraGridItem colSpan={colSpan}>
      <Box
        bgColor={'white'}
        border={'1px'}
        p={3}
        h={{ md: '160px' }}
        borderColor="gray.400"
        borderRadius={5}
        textAlign={{ sm: 'left', md: 'center' }}
      >
        {title}
      </Box>
    </ChakraGridItem>
  );
};

GridItem.defaultProps = {
  colSpan: 1,
};
