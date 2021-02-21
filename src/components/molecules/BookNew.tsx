import { ChangeEvent, FC, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  createStyles,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
} from '@material-ui/core';
import { Book, BookWithoutId, TAG_PRESETS } from '../../domain/models/book';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

type Props = {
  submitBook: (book: BookWithoutId) => void;
};

const BookNew: FC<Props> = ({ submitBook = () => undefined }) => {
  const classes = useStyles();
  const [tags, setTags] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setTags(event.target.value as string[]);
  };

  const submit = () => {
    const book: BookWithoutId = {
      title:
    };
    submitBook(book);
  };

  return (
    <Card>
      <CardContent>
        <form className={classes.root}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField id="title" label="タイトル" />
            </Grid>
            <Grid item>
              <TextField id="subtitle" label="サブタイトル" />
            </Grid>
            <Grid item>
              <TextField
                id="price"
                label="値段"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">￥</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField id="url" label="URL" />
            </Grid>
            <Grid item>
              <FormControl id="tags">
                <InputLabel>タグ</InputLabel>
                <Select
                  multiple
                  input={<Input id="tags" />}
                  value={tags}
                  onChange={handleChange}
                  renderValue={(selected) => (
                    <div>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </div>
                  )}
                >
                  {TAG_PRESETS.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox checked={false} color="primary" />}
                label="読了"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                本を追加
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookNew;
