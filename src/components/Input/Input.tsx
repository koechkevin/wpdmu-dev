import React, { FC } from 'react';
import { Props } from './Input.interface';
import { TextField } from '@material-ui/core';
import useStyles from './Input.styles';
import styles from './input.module.scss';

const Input: FC<Props> = (props) => {
  const { style, ...restProps } = props;
  const classes = useStyles();
  // @ts-ignore
  return <TextField style={{ ...style }} className={[classes.root, styles.root].join(' ')} variant="outlined" {...restProps} />;
};

export default Input;
