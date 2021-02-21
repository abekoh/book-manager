import { FC } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AddButton: FC<{ label: string; path: string }> = ({ label, path }) => (
  <Link to={path}>
    <Button variant="contained" color="primary" startIcon={<AddIcon />}>
      {label}
    </Button>
  </Link>
);

export default AddButton;
