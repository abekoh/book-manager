import { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Tag } from '../../domain/models/book';
import BookTag from '../atoms/BookTag';

const BookTagList: FC<{ tags: Tag[] }> = ({ tags }) => (
  <Grid container direction="row">
    {tags.map((tag) => (
      <Grid item>
        <BookTag tag={tag} />
      </Grid>
    ))}
  </Grid>
);

export default BookTagList;
