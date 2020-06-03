import React, { FC } from 'react';
import { Props } from './Exception.interface';
import classes from './exception.module.scss';
import { Button } from '@material-ui/core';

const Exception: FC<Props> = (props) => {
  const { text, exception, onBack, history } = props;

  return (
    <div className={classes.exception}>
      <div className={classes.errorCode}>{exception}</div>
      <div className={classes.text}>{text}</div>
      <div className={classes.back}>
        <Button
          onClick={() => {
            if (onBack) {
              return onBack();
            }
            history.push('/');
          }}
          className={classes.button}
          color="primary"
          style={{ textDecoration: 'none'}}
          variant="contained"
          disableElevation
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default Exception;
