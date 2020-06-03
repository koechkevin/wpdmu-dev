import React, { FC } from 'react';
import { Props } from './Input.interface';
import { TextField } from '@material-ui/core';
import useStyles from './Input.styles';

const Input: FC<Props> = (props) => {
  const classes = useStyles();
  // @ts-ignore
  return <TextField className={classes.root} variant="outlined" {...props} />;
};

export default Input;
