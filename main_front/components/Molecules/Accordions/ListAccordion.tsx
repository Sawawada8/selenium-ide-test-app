import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';

import { ListItem } from '../../Atoms/AtomsImport';

interface Props {
  Icon?: any;
  title: string;
  children?: any;
}

export const ListAccordion: React.FC<Props> = ({
  Icon,
  title,
  children,
}: Props) => {
  return (
    <Accordion allowMultiple bg="gray">
      <AccordionItem>
        <h2>
          <AccordionButton p={3}>
            <Box flex="1" textAlign="left">
              {Icon}
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

ListAccordion.defaultProps = {
  Icon: <DragHandleIcon w={6} h={6} mr={3} />,
};
