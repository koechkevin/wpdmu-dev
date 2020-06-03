import React, { FC } from 'react';
import { Props } from './Select.interface';
import classes from './Select.module.scss';
import {createStyles, Select as MatSelect, withStyles,} from '@material-ui/core';
import icon from '../../assets/keyboard_arrow_down.svg';

const Custom = withStyles(() => createStyles({
  root: {
    padding: 0
  }
}))(MatSelect);
const Select: FC<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <span style={{ position: 'relative' }}>
        <Custom
          variant="outlined"
          IconComponent={() => (
            <div role="button" aria-label="view password">
              <img alt="select" src={icon} />
            </div>
          )}
          className={[className, classes.select].join(' ')}
          {...restProps}
        />
    </span>
  );
};

export default Select;
