import React from 'react';
import { Box } from '@chakra-ui/react';

import { ListAccordion } from '../../Molecules/MoleculesImport';
import { ListItem } from '../../Atoms/AtomsImport';

interface Props {
  lists: any[];
}

export const Sidebar: React.FC<Props> = ({ lists }: Props) => {
  return (
    <Box w="200px">
      {lists.map(v => {
        return v;
      })}
    </Box>
  );
};

Sidebar.defaultProps = {
  // lists: [
  //   <ListItem key={1} />,
  //   <ListAccordion
  //     key={2}
  //     lists={[<ListItem key={1} />, <ListItem key={2} />]}
  //     title="defaultTitle"
  //   />,
  //   <ListItem key={3} />,
  // ],
};
