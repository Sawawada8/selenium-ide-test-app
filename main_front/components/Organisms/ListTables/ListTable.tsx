import React from 'react';

import { GridItem } from '../../Atoms/AtomsImport';
import { Grid } from '../../Molecules/MoleculesImport';

interface Props {}

export const ListTable: React.FC<Props> = ({}: Props) => {
  return (
    <Grid>
      <GridItem title="sampleTest" link="#" />
      <GridItem title="sampleTest" link="#" />
      <GridItem title="sampleTest" link="#" />
      <GridItem title="sampleTest" link="#" />
    </Grid>
  );
};

ListTable.defaultProps = {};
