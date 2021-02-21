import { ChangeEvent, FC } from 'react';
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
import { BookForm, TAG_PRESETS } from '../../domain/models/book';

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
  book: BookForm;
  setBook: (book: BookForm) => void;
  submitBook: () => void;
};

const BookNew: FC<Props> = ({ book, setBook, submitBook }) => {
  const classes = useStyles();

  const handleInputChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    // eslint-disable-next-line no-console
    console.log(event.target);
    if (!event.target.name) {
      return;
    }
    const newBook: BookForm = {
      ...book,
      [event.target.name]: event.target.value,
    };
    // eslint-disable-next-line no-console
    console.log(newBook);
    setBook(newBook);
  };

  const handleSubmit = () => {
    submitBook();
  };

  return (
    <Card>
      <CardContent>
        <form className={classes.root}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField
                id="title"
                name="title"
                label="タイトル"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="subtitle"
                name="subtitle"
                label="サブタイトル"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="price"
                name="price"
                label="値段"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">￥</InputAdornment>
                  ),
                }}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="url"
                name="url"
                label="URL"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <FormControl id="tags">
                <InputLabel>タグ</InputLabel>
                <Select
                  multiple
                  input={<Input id="tags" name="tags" />}
                  value={book.tags}
                  onChange={handleInputChange}
                  renderValue={(selectedTag: string[]) => (
                    <div>
                      {selectedTag.map((tag) => (
                        <Chip key={tag} label={tag} />
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
                control={
                  <Checkbox
                    checked={false}
                    color="primary"
                    onChange={handleInputChange}
                  />
                }
                label="読了"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
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
