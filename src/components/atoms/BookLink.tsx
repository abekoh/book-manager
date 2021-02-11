import { FC } from 'react';
import LinkIcon from '@material-ui/icons/Link';
import { Grid, Link, Typography } from '@material-ui/core';

const BookLink: FC<{ url: string }> = ({ url }) => (
  <Link href={url}>
    <Grid container>
      <Grid item>
        <LinkIcon />
      </Grid>
      <Grid item>
        <Typography>{url}</Typography>
      </Grid>
    </Grid>
  </Link>
);

export default BookLink;
