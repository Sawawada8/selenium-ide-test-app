import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { ListAccordion } from '../../Molecules/Accordions/ListAccordion';
import { ListItem } from '../../Atoms/ListItems/ListItem';
import { Sidebar } from '../../Organisms/Sidebars/Sidebar';

interface Props {
  mainContent: any;
}

export const SidebarLayout = ({ mainContent }: Props) => {
  const sideBarLists = [
    <ListItem key={1} name="TestingList" />,
    <ListItem key={2} name="TimeScadule" />,
    <ListAccordion
      key={3}
      title="Details"
      lists={[<ListItem key={1} />, <ListItem key={2} />]}
    />,
  ];

  return (
    <Flex>
      <Box mr={5}>
        <Sidebar lists={sideBarLists} />
      </Box>
      <Box flex="1" bgColor={'tomato'}>
        {mainContent}
      </Box>
    </Flex>
  );
};

SidebarLayout.defaultProps = {
  mainContent: <div>hello world</div>,
};
