import { ChangeEvent, FC, useState } from 'react';
import {
  Card,
  CardContent,
  Chip,
  createStyles,
  FormControl,
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
import { TAG_PRESETS } from '../../domain/models/book';

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
  const [tags, setTags] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setTags(event.target.value as string[]);
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
              <FormControl>
                <InputLabel>タグ</InputLabel>
                <Select
                  id="tags"
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
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookNew;
