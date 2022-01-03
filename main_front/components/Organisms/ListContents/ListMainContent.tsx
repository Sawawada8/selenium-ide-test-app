import React from 'react';

import { Box } from '@chakra-ui/react';

import { Title } from '../../Atoms/AtomsImport';
import { ListTable } from '../../Organisms/OrganismsImport';

interface Props {
  title: string;
}

export const ListMainContent: React.FC<Props> = ({ title }: Props) => {
  return (
    <Box p={5}>
      <Title title={title} />
      <ListTable />
    </Box>
  );
};

ListMainContent.defaultProps = {};
