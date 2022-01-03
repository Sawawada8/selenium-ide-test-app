import React from 'react';

import { chakra, Heading } from '@chakra-ui/react';

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }: Props) => {
  return (
    <Heading as="h1" size="2xl">
      {title}
    </Heading>
  );
};

Title.defaultProps = {};
