
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
  submit: {
    padding: '16px 8px',
    textTransform: 'none',
  },
  content: {
    color: theme.palette.primary.contrastText,
  },
  link: {
    color: theme.palette.primary.main,
  },
}));
