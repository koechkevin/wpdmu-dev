import React, { FC } from 'react';
import { Props } from './SlidePointer.interface';
import useStyles from './SlidePointer.styles';
import { Typography } from '@material-ui/core';
import classes from './SlidePointer.module.scss'

const SlidePointer: FC<Props> = (props) => {
  const { currentStep, totalSteps, className,  ...restProps} = props;
  const styles = useStyles();
  return (
    <div className={[classes.pointer, className].join(' ')} {...restProps}>
      <Typography style={{ fontWeight: 'bold' }}>
        Step {currentStep} of {totalSteps}
      </Typography>
      <div className={currentStep === 1 ? styles.active : styles.pointer} />
      <div className={currentStep === 2 ? styles.active : styles.pointer} />
      <div className={currentStep === 3 ? styles.active : styles.pointer} />
    </div>
  );
};

export default SlidePointer;
