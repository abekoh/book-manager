import { FC } from 'react';
import { Chip } from '@material-ui/core';
import { Tag } from '../../domain/models/book';

const BookTag: FC<{ tag: Tag }> = ({ tag }) => <Chip label={tag.name} />;

export default BookTag;
