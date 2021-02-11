import { FC } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button, Grid } from '@material-ui/core';

const AddButton: FC = () => (
  <Grid item textAlign="center">
    <Button variant="contained" color="primary" startIcon={<AddIcon />}>
      追加
    </Button>
  </Grid>
);

export default AddButton;
