import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    pointer: {
      backgroundColor: theme.palette.grey['400'],
    },
    active: {
      backgroundColor: theme.palette.common.black,
    },
  }),
);
