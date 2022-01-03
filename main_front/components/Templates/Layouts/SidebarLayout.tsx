import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';

import { ListAccordion } from '../../Molecules/MoleculesImport';
import { ListItem } from '../../Atoms/AtomsImport';
import { Sidebar } from '../../Organisms/OrganismsImport';

interface Props {
  mainContent: any;
}

export const SidebarLayout: React.FC<Props> = ({ mainContent }: Props) => {
  return (
    <Flex>
      <Box bgColor="black">
        <Sidebar>
          <ListItem name="TestingList" />
          <ListItem name="TimeScadule" />
          <ListAccordion
            Icon={<DragHandleIcon w={6} h={6} mr={3} />}
            title="Details"
          >
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </ListAccordion>
        </Sidebar>
      </Box>
      <Box flex="1" bgColor={'tomato'} h="100vh" overflow="scroll">
        {mainContent}
      </Box>
    </Flex>
  );
};

SidebarLayout.defaultProps = {};
