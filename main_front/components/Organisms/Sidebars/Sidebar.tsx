import React from 'react';
import { Box } from '@chakra-ui/react';

import { ListAccordion } from '../../Molecules/Accordions/ListAccordion';
import { ListItem } from '../../Atoms/ListItems/ListItem';

interface Props {
  lists: any[];
}

export const Sidebar = ({ lists }: Props) => {
  return (
    <Box w="200px">
      {lists.map(v => {
        return v;
      })}
    </Box>
  );
};

Sidebar.defaultProps = {
  lists: [
    <ListItem key={1} />,
    <ListAccordion
      key={2}
      lists={[<ListItem key={1} />, <ListItem key={2} />]}
    />,
    <ListItem key={3} />,
  ],
};
