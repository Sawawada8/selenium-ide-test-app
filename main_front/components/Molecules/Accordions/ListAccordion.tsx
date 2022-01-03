import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

import { ListItem } from '../../Atoms/AtomsImport';

interface Props {
  lists: any[];
  title: string;
  children?: any;
}

export const ListAccordion: React.FC<Props> = ({
  lists,
  title,
  children,
}: Props) => {
  return (
    <Accordion allowMultiple bg="gray">
      <AccordionItem>
        <h2>
          <AccordionButton p={3}>
            <Box flex="1" textAlign="left">
              <AddIcon w={6} h={6} mr={3} />
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {lists.map((v, i) => {
            return v;
          })}
          <ListItem />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

ListAccordion.defaultProps = {
  // lists: [<ListItem key={1} />, <ListItem key={2} />],
  // title: 'defalut',
};
