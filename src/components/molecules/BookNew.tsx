import { FC } from 'react';
import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const BookNew: FC = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <form className={classes.root}>
          <TextField id="title" label="タイトル" />
        </form>
      </CardContent>
    </Card>
  );
};

export default BookNew;
